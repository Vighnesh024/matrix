import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4l4lsPnCVEcBpqlW251orkQDncp_-EHc",
  authDomain: "myspacedev-9807f.firebaseapp.com",
  projectId: "myspacedev-9807f",
  storageBucket: "myspacedev-9807f.firebasestorage.app",
  messagingSenderId: "576751498836",
  appId: "1:576751498836:web:3adf4ca2379b334edb9fc1",
  measurementId: "G-NHBHMXSF92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
