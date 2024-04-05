import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDREtnP-3XP6VEhoB_FqAYmaDJ3gym0ayY",
  authDomain: "saas-translator-app-a7ab8.firebaseapp.com",
  projectId: "saas-translator-app-a7ab8",
  storageBucket: "saas-translator-app-a7ab8.appspot.com",
  messagingSenderId: "724380009701",
  appId: "1:724380009701:web:dc4e0c3c6ebb6a6988800c"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
