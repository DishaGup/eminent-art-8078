// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOouS9f0GiE1yzymlVpXWWDzbcO_u0_nY",
  authDomain: "tendify-ed795.firebaseapp.com",
  projectId: "tendify-ed795",
  storageBucket: "tendify-ed795.appspot.com",
  messagingSenderId: "539444970167",
  appId: "1:539444970167:web:6537630b9ebd2c73ac0332"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);