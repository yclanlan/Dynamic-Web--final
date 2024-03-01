// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm398JBcchAU03noD0ulVyfSY8XZXjLoo",
  authDomain: "lansbar.firebaseapp.com",
  projectId: "lansbar",
  storageBucket: "lansbar.appspot.com",
  messagingSenderId: "377441795878",
  appId: "1:377441795878:web:95946057c239b7bfa94be7",
  measurementId: "G-MKM2NZ13DJ"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
