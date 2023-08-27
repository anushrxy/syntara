// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG96wWSLC6beOJnofvCTufb94QZmFbGhU",
  authDomain: "syntara-bitforge.firebaseapp.com",
  projectId: "syntara-bitforge",
  storageBucket: "syntara-bitforge.appspot.com",
  messagingSenderId: "92034370481",
  appId: "1:92034370481:web:80f3e4874a64da5ca00b90"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);