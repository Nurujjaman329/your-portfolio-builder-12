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

export async function fetchProjects(): Promise<ProjectDetail[]> {
  if (!isFirebaseConfigured || !db) return staticProjects;
  try {
    const snap = await getDocs(collection(db, "projects"));
    if (snap.empty) return staticProjects;
    const order = new Map(staticProjects.map((p, i) => [p.slug, i]));
    return snap.docs
      .map((d) => d.data() as ProjectDetail)
      .sort((a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999));
  } catch {
    return staticProjects;
  }
}

export async function fetchProject(slug: string): Promise<ProjectDetail | undefined> {
  if (!isFirebaseConfigured || !db) return staticProjects.find((p) => p.slug === slug);
  try {
    const snap = await getDoc(doc(db, "projects", slug));
    if (!snap.exists()) return staticProjects.find((p) => p.slug === slug);
    return snap.data() as ProjectDetail;
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
