import { firebaseConfig } from "./myFirebaseConfig";
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db,auth};



