// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwFp5QQVz3DzF6Edk8LRIdceQD17Gk838",
  authDomain: "mobile-883.firebaseapp.com",
  databaseURL:
    "https://mobile-883-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mobile-883",
  storageBucket: "mobile-883.appspot.com",
  messagingSenderId: "896006595686",
  appId: "1:896006595686:web:662a12b613ae1c44b839a7",
  measurementId: "G-ZXVBS072T5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

