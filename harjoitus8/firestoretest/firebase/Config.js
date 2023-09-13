// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAidBzl-l5uyrhNzGGwxc-b1GDfCWydo1w",
  authDomain: "chattest-28e08.firebaseapp.com",
  projectId: "chattest-28e08",
  storageBucket: "chattest-28e08.appspot.com",
  messagingSenderId: "812929825325",
  appId: "1:812929825325:web:2b026be1ef86e585e256a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages'

export {firestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, MESSAGES};