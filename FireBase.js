// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbTIoNnryH5TXmnw4_W2yjWe2oZU8JMis",
  authDomain: "whatsapp-clone-91a2e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-91a2e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsapp-clone-91a2e",
  storageBucket: "whatsapp-clone-91a2e.appspot.com",
  messagingSenderId: "1004157460514",
  appId: "1:1004157460514:web:1b65ed075cc7f3ae2f2a7b",
  measurementId: "G-ESK6NXH45Q"
};

// Initialize Firebase
export default getDatabase(initializeApp(firebaseConfig));