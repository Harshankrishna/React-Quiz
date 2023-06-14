import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFQY1_qE_fVfLI_ZqF4FuWcPOxYqIxErI",
  authDomain: "reactquiz-7ad60.firebaseapp.com",
  projectId: "reactquiz-7ad60",
  storageBucket: "reactquiz-7ad60.appspot.com",
  messagingSenderId: "332884355307",
  appId: "1:332884355307:web:b2815bb68aa5aed808f6ae",
  measurementId: "G-S3FJHWWJF8",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
