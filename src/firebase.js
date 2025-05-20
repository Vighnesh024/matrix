// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Replace with your actual Firebase config if it changes
const firebaseConfig = {
  apiKey: "AIzaSyD-n6zDgkLGrngU0MRKgWHPKJ8fTVdGJ4A",
  authDomain: "myspace-privacy.firebaseapp.com",
  projectId: "myspace-privacy",
  storageBucket: "myspace-privacy.appspot.com",
  messagingSenderId: "925969044548",
  appId: "1:925969044548:web:b70d02beee443d0325bc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
