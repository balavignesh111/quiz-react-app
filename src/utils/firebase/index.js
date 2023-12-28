// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth";

import {getFirestore, doc, getDoc,setDoc } from "firebase/firestore";

import {gk} from "../../constants/data"

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

// authetication - ( getAuth will activate the authentication )
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
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

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

// to get user details----
const getUserDetails = async(userId)=>{
  const docRef = doc(quizDb,"users",userId);
  const resp = await getDoc(docRef);
  console.log(resp._document.data.value.mapValue.fields.displayName.stringValue);
  return (resp._document.data.value.mapValue.fields.displayName.stringValue)
}

// sign out user
const signOutAuthUser = async ()=>{
  const resp = await signOut(quizAuth);
  console.log(resp);
}

// to import question in db
const sendDataToDb = async ()=>{
  const docRef = doc(quizDb,"quizData","books");
  console.log(docRef)
  const resp = await setDoc(docRef,{gk});
  console.log(resp);
}

// sendDataToDb();

const getDataFromDb = async(category)=>{
  console.log(category)
  const docRef = doc(quizDb,"quizData",category);
  try{
    const resp = await getDoc(docRef);
    console.log(resp);
    return resp;
  }catch(error){
    console.log(error.message);
  }
}

export { 
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithEmailAndPassword,
  getUserDetails,
  signOutAuthUser,
  getDataFromDb
}