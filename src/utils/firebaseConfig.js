// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2IFaT2wMHbRvtaw1zVX2buDeQ5lYYZW0",
  authDomain: "netflixgpt-60f6f.firebaseapp.com",
  projectId: "netflixgpt-60f6f",
  storageBucket: "netflixgpt-60f6f.firebasestorage.app",
  messagingSenderId: "405271961352",
  appId: "1:405271961352:web:159e32d3517986e8f896bd",
  measurementId: "G-D27LR7M49B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();
