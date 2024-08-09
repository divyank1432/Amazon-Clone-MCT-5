// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhEJOOo9rZNXpdRv79ybAHWv4Xb9QN4f4",
  authDomain: "clone-7d41f.firebaseapp.com",
  projectId: "clone-7d41f",
  storageBucket: "clone-7d41f.appspot.com",
  messagingSenderId: "448576922087",
  appId: "1:448576922087:web:737555bd15b1e9c8821d42",
  measurementId: "G-VDNLBSYYZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);