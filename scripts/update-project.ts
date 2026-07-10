import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { projects } from "../src/data/projects";

const slug = process.argv[2] ?? "distributor-management-system";

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
const db = getFirestore(app);

await setDoc(doc(db, "projects", project.slug), {
  ...project,
  updatedAt: serverTimestamp(),
});

console.log(`\n✅ Updated Firebase: ${project.name}`);
console.log(`   Features: ${project.highlights.length}`);
console.log(`   Images: ${project.images.length}\n`);
