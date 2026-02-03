import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Use the project ID from your Firebase screen
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_FROM_FIREBASE_SETTINGS",
  authDomain: "med-tracker-60c02.firebaseapp.com",
  projectId: "med-tracker-60c02",
  storageBucket: "med-tracker-60c02.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();