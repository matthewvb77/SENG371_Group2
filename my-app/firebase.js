import { getApps, initializeApp, getApp } from "firebase/app";
import Constants from "expo-constants";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	addDoc,
	docRef,
	doc,
	getDoc,
	setDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: Constants.manifest.extra.firebaseApiKey,
	authDomain: Constants.manifest.extra.firebaseAuthDomain,
	projectId: Constants.manifest.extra.firebaseProjectId,
	storageBucket: Constants.manifest.extra.firebaseStorageBucket,
	messagingSenderId: Constants.manifest.extra.firebaseMessagingSenderId,
	appId: Constants.manifest.extra.firebaseAppId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

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
