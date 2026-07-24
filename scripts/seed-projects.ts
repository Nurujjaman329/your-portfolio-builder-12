import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { projects } from "../src/data/projects";

const config = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

if (!config.apiKey || !config.projectId) {
  console.error("\n❌ Firebase is not configured in .env");
  console.error("   Fill in all VITE_FIREBASE_* values, then run: npm run seed:projects\n");
  process.exit(1);
}

const app = initializeApp(config);
const db = getFirestore(app);

const before = await getDocs(collection(db, "projects"));
console.log(`\nFirestore before: ${before.size} project(s)\n`);

for (const project of projects) {
  await setDoc(doc(db, "projects", project.slug), {
    ...project,
    updatedAt: serverTimestamp(),
  });
  console.log(`✓ ${project.slug} — ${project.name}`);
}

const after = await getDocs(collection(db, "projects"));
console.log(`\n✅ Done. Firestore now has ${after.size} project(s).\n`);
