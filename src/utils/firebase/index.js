// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {getFirestore, doc, getDoc,setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDLLljXBHYAHqybiI-D1KA0O3cWvZQm60",
  authDomain: "quiz-app-4b749.firebaseapp.com",
  projectId: "quiz-app-4b749",
  storageBucket: "quiz-app-4b749.appspot.com",
  messagingSenderId: "161989124385",
  appId: "1:161989124385:web:7043c8cf3709955a929e60"
};

// Initialize Firebase
const quizApp = initializeApp(firebaseConfig);

// authetication
const quizAuth = getAuth(quizApp);

// signIn with google

const googleProvider = new GoogleAuthProvider(); 

const signInWithGooglePopup = async () => {
  try{
    let res = await signInWithPopup(quizAuth, googleProvider);
    return res;
  }catch(err){
    console.log(err.message);
  }
}

const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return createUserWithEmailAndPassword(quizAuth,email,password);
}

const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return signInWithEmailAndPassword(quizAuth,email,password);
}

// firestore database
const quizDb = getFirestore(quizApp);

const createUserDocumentFromAuth = async(userAuth,additionalInfo = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(quizDb,"users",userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    }catch (err){
      console.log("error in creating user", err.message)
    }
  }
  return userDocRef;
}

export { 
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithEmailAndPassword
}