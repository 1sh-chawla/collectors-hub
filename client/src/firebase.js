// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "collectors-hub-d74ae.firebaseapp.com",
  projectId: "collectors-hub-d74ae",
  storageBucket: "collectors-hub-d74ae.appspot.com",
  messagingSenderId: "286500387719",
  appId: "1:286500387719:web:0631bbd193ae3d9616f122"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);