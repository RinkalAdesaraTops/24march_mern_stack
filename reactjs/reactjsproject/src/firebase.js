// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2qCzeOfi0y90ClbcTemJgeDLJ_LdcDXQ",
  authDomain: "marchmernstack.firebaseapp.com",
  projectId: "marchmernstack",
  storageBucket: "marchmernstack.firebasestorage.app",
  messagingSenderId: "89429501356",
  appId: "1:89429501356:web:584fbeca8b40208c71c609",
  measurementId: "G-BTN9WQ9RVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}