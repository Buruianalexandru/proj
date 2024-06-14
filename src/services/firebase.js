import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUrCqichyBAesvwKzKgaCn-9IqAHG4O14",
    authDomain: "licenta-e619d.firebaseapp.com",
    projectId: "licenta-e619d",
    storageBucket: "licenta-e619d.appspot.com",
    messagingSenderId: "801512700359",
    appId: "1:801512700359:web:5db3c697c3ce153e1941e2"
};
// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()
const db = getFirestore();

export { auth, db }