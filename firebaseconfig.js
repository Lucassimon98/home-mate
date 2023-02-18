// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw_v7gx75fptLMBMNGKT5wkuQmrCknqNg",
  authDomain: "homemate-1710e.firebaseapp.com",
  databaseURL: "https://homemate-1710e-default-rtdb.firebaseio.com",
  projectId: "homemate-1710e",
  storageBucket: "homemate-1710e.appspot.com",
  messagingSenderId: "1008005248654",
  appId: "1:1008005248654:web:e962ce8c9cc81889f77bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);