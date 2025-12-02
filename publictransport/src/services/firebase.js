// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAuZzIyVIdA-1wW2WDOeVju3K33hZuW6dY",
  authDomain: "publictransport-980b4.firebaseapp.com",
  projectId: "publictransport-980b4",
  storageBucket: "publictransport-980b4.appspot.com",
  messagingSenderId: "76794117258",
  appId: "1:76794117258:web:b12c91495b7b6ef072c173",
  measurementId: "G-4SS41XVT4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
