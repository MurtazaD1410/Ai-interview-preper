import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "prep-wise-c0a0f.firebaseapp.com",
  projectId: "prep-wise-c0a0f",
  storageBucket: "prep-wise-c0a0f.firebasestorage.app",
  messagingSenderId: "410746825590",
  appId: "1:410746825590:web:1b58e4a398f382a1b2e857",
  measurementId: "G-P08WYVPY63",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
