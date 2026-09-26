import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage, isFirebaseConfigured } from "./firebase";
import { projects as staticProjects, type ProjectDetail } from "@/data/projects";

/** Prefer code (static) for project copy; Firestore may only override images when set. */
function mergeWithStatic(remote: ProjectDetail): ProjectDetail {
  const local = staticProjects.find((p) => p.slug === remote.slug);
  if (!local) return { ...remote, images: remote.images ?? [] };
  return {
    ...remote,
    ...local,
    images: remote.images?.length ? remote.images : local.images,
  };
}

export async function fetchProjects(): Promise<ProjectDetail[]> {
  if (!isFirebaseConfigured || !db) return staticProjects;
  try {
    const snap = await getDocs(collection(db, "projects"));
    if (snap.empty) return staticProjects;

    const fromFs = new Map<string, ProjectDetail>();
    for (const d of snap.docs) {
      const merged = mergeWithStatic(d.data() as ProjectDetail);
      fromFs.set(merged.slug, merged);
    }

    // Always show every static project (e.g. Lyfuber), even if CMS is stale/missing.
    const ordered = staticProjects.map((p) => fromFs.get(p.slug) ?? p);
    const extras = [...fromFs.values()].filter(
      (p) => !staticProjects.some((s) => s.slug === p.slug),
    );
    return [...ordered, ...extras];
  } catch {
    return staticProjects;
  }
}

export async function fetchProject(slug: string): Promise<ProjectDetail | undefined> {
  if (!isFirebaseConfigured || !db) return staticProjects.find((p) => p.slug === slug);
  try {
    const snap = await getDoc(doc(db, "projects", slug));
    if (!snap.exists()) return staticProjects.find((p) => p.slug === slug);
    return mergeWithStatic(snap.data() as ProjectDetail);
  } catch {
    return staticProjects.find((p) => p.slug === slug);
  }
}

export async function saveProject(project: ProjectDetail): Promise<void> {
  if (!db) throw new Error("Firebase not configured");
  await setDoc(doc(db, "projects", project.slug), {
    ...project,
    updatedAt: serverTimestamp(),
  });
}

export async function removeProject(slug: string): Promise<void> {
  if (!db) throw new Error("Firebase not configured");
  await deleteDoc(doc(db, "projects", slug));
}

/** Re-upload all default projects from src/data/projects.ts into Firestore. */
export async function seedStaticProjects(): Promise<number> {
  if (!db) throw new Error("Firebase not configured");
  for (const project of staticProjects) {
    await saveProject(project);
  }
  return staticProjects.length;
}

export async function uploadProjectImage(slug: string, file: File): Promise<string> {
  if (!storage) throw new Error("Firebase not configured");
  const path = `projects/${slug}/${Date.now()}-${file.name}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteProjectImage(url: string): Promise<void> {
  if (!storage) return;
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch {
    // ignore — image may already be deleted
  }
}
