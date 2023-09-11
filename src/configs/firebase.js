// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxW-naqydffaAW8cftJFPHjM2ZEL3lMc",
  authDomain: "redesocial-9c5b0.firebaseapp.com",
  projectId: "redesocial-9c5b0",
  storageBucket: "redesocial-9c5b0.appspot.com",
  messagingSenderId: "199518615293",
  appId: "1:199518615293:web:9352f32e159ebe918ef094",
  measurementId: "G-HN6GPZBBX1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { db, auth, analytics, app, storage};