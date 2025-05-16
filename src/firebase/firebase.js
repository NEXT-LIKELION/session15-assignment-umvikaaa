// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsJsVylYLGYlCaci33P6feX586z6zEbOY",
    authDomain: "todo-a-ec0d3.firebaseapp.com",
    projectId: "todo-a-ec0d3",
    storageBucket: "todo-a-ec0d3.firebasestorage.app",
    messagingSenderId: "276713766926",
    appId: "1:276713766926:web:fdd918e1b2fc3bc5337c5f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
