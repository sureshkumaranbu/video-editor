// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration (replace with your Firebase project credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDI66CtdgQos_gW45yYlZSRvCS-bKZLr3c",
  authDomain: "opusclone-401ce.firebaseapp.com",
  projectId: "opusclone-401ce",
  storageBucket: "opusclone-401ce.appspot.com",
  messagingSenderId: "1015836445820",
  appId: "1:1015836445820:web:5f4fc552d80841c83f8df9",
  measurementId: "G-VSP8J2YE8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Storage instance
const storage = getStorage(app);

export { storage };
