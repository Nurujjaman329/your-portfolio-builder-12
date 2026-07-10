import { readFileSync, readdirSync } from "fs";
import { join, extname } from "path";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { projects } from "../src/data/projects";

const slug = process.argv[2] ?? "distributor-management-system";
const localDir = join(process.cwd(), "public", "projects", slug);

const config = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

if (!config.apiKey || !config.projectId) {
  console.error("\n❌ Firebase is not configured in .env\n");
  process.exit(1);
}

const project = projects.find((p) => p.slug === slug);
if (!project) {
  console.error(`\n❌ Project not found: ${slug}\n`);
  process.exit(1);
}

const app = initializeApp(config);
const storage = getStorage(app, `gs://${config.storageBucket}`);
const db = getFirestore(app);

const files = readdirSync(localDir)
  .filter((f) => [".jpg", ".jpeg", ".png", ".webp"].includes(extname(f).toLowerCase()))
  .sort();

if (files.length === 0) {
  console.error(`\n❌ No images found in public/projects/${slug}/\n`);
  process.exit(1);
}

console.log(`\nUploading ${files.length} image(s) for ${project.name}…\n`);

const urls: string[] = [];

for (const file of files) {
  const buffer = readFileSync(join(localDir, file));
  const storagePath = `projects/${slug}/${file}`;
  const storageRef = ref(storage, storagePath);
  const contentType = file.endsWith(".png") ? "image/png" : "image/jpeg";

  await uploadBytes(storageRef, buffer, { contentType });
  const url = await getDownloadURL(storageRef);
  urls.push(url);
  console.log(`✓ ${file}`);
}

await setDoc(doc(db, "projects", slug), {
  ...project,
  images: urls,
  updatedAt: serverTimestamp(),
});

console.log(`\n✅ Uploaded ${urls.length} image(s) to Firebase Storage`);
console.log(`✅ Updated Firestore with public image URLs\n`);
