import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrBz-2NdW0HF67wKXeqlBFetxwsC6CRbw",
    authDomain: "tcfchats.firebaseapp.com",
    projectId: "tcfchats",
    storageBucket: "tcfchats.appspot.com",
    messagingSenderId: "417899635590",
    appId: "1:417899635590:web:5ba53f101367c5bdb84207",
    measurementId: "G-V0NDYM7KDV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();