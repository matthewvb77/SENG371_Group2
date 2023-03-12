import { getApps, initializeApp, getApp } from 'firebase/app';
import Constants from 'expo-constants';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  docRef,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBISxRAkqhe-I16pHdXjogT_sWwSAyz4f4',
  authDomain: 'casino-90ba4.firebaseapp.com',
  projectId: 'casino-90ba4',
  storageBucket: 'casino-90ba4.appspot.com',
  messagingSenderId: '162824721551',
  appId: '1:162824721551:web:03914cea5c3ae15266ccfa',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth,
  collection,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  docRef,
  doc,
  getDoc,
  setDoc,
};
