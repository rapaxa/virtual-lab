// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCMZoLrG2vSr1r1Knra3lQqjXnhuByH2v8",
    authDomain: "news-18c20.firebaseapp.com",
    projectId: "news-18c20",
    storageBucket: "news-18c20.appspot.com",
    messagingSenderId: "438761205291",
    appId: "1:438761205291:web:f47e2d685662823343c46e",
    databaseURL: "https://news-18c20-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

