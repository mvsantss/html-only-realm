import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBGLHHHRBN46vnro7qwljPLhC7cQYXsZJg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "landit-89463.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "landit-89463",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "landit-89463.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "426395338357",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:426395338357:web:21b2a13dc78434893fda3c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-HB1NN40NZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
