// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDgl65tyeVc8uVb9rTI_tsfEgHMF5BxNw",
  authDomain: "commercial-project-55665.firebaseapp.com",
  projectId: "commercial-project-55665",
  storageBucket: "commercial-project-55665.appspot.com",
  messagingSenderId: "1088852949272",
  appId: "1:1088852949272:web:2fdb48027484260779c66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;