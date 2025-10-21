// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4e_hgUKbyLaepEsGFMjoA3h5DUq1STk",
  authDomain: "fir-9bf11.firebaseapp.com",
  projectId: "fir-9bf11",
  storageBucket: "fir-9bf11.firebasestorage.app",
  messagingSenderId: "521139025609",
  appId: "1:521139025609:web:5db40bad9dde875ba2ff18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);