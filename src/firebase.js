// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4l4lsPnCVEcBpqlW251orkQDncp_-EHc",
  authDomain: "myspacedev-9807f.firebaseapp.com",
  projectId: "myspacedev-9807f",
  storageBucket: "myspacedev-9807f.appspot.com", // 🔧 Fixed `.app` typo to `.com`
  messagingSenderId: "576751498836",
  appId: "1:576751498836:web:3adf4ca2379b334edb9fc1",
  measurementId: "G-NHBHMXSF92"
};

// ✅ Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
