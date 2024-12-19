// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtrmbNlsP4LixQn3YJXqmU7TFduUsRVs",
  authDomain: "netflixgpt-cd573.firebaseapp.com",
  projectId: "netflixgpt-cd573",
  storageBucket: "netflixgpt-cd573.firebasestorage.app",
  messagingSenderId: "217986215615",
  appId: "1:217986215615:web:750667b63d90b4e487600a",
  measurementId: "G-6718J9FW2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
