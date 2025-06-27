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
  apiKey: "AIzaSyCCYHijWSlcJ9mM-edxzOGBj3-JApx1y7M",
  authDomain: "conpecode-firebase.firebaseapp.com",
  projectId: "conpecode-firebase",
  storageBucket: "conpecode-firebase.firebasestorage.app",
  messagingSenderId: "890617846483",
  appId: "1:890617846483:web:f90f41372ef45a25a51226",
  measurementId: "G-WVCF31ZT59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);