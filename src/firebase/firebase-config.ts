// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Q4LM8RWMoJ6jRrMi8GkeIqm5oF4hkhQ",
  authDomain: "conpecode-firebase-2025.firebaseapp.com",
  projectId: "conpecode-firebase-2025",
  storageBucket: "conpecode-firebase-2025.firebasestorage.app",
  messagingSenderId: "1059720061151",
  appId: "1:1059720061151:web:01c10f4d86929346e4896a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);