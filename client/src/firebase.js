// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-20baa.firebaseapp.com",
  projectId: "mern-blog-app-20baa",
  storageBucket: "mern-blog-app-20baa.firebasestorage.app",
  messagingSenderId: "318726666750",
  appId: "1:318726666750:web:6816e31b462d1b406c68af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);