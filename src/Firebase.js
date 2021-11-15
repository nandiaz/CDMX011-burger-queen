// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJFeYUfNij9SgaKKCLf6wBSMZZFEv6sN4",
  authDomain: "burger-queen-af35f.firebaseapp.com",
  projectId: "burger-queen-af35f",
  storageBucket: "burger-queen-af35f.appspot.com",
  messagingSenderId: "311499227176",
  appId: "1:311499227176:web:fade589e76928edb3c751d",
  measurementId: "G-6BQST5S2QC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
//const analytics = getAnalytics(app);