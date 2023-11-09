// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDLHXYSMsGCl0E8XUZ5tjUadvWAsxHT3Vc",
  authDomain: "hypefitness-db.firebaseapp.com",
  projectId: "hypefitness-db",
  storageBucket: "hypefitness-db.appspot.com",
  messagingSenderId: "6357237868",
  appId: "1:6357237868:web:6cd8604a34d8b038571849",
  measurementId: "G-SM5MZGEBQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default firebaseConfig
