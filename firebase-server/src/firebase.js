// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbhAQXWinsDIlNnAkoyREyHLCJP4RmLZk",
  authDomain: "react-firebase-auth-3f705.firebaseapp.com",
  projectId: "react-firebase-auth-3f705",
  storageBucket: "react-firebase-auth-3f705.appspot.com",
  messagingSenderId: "698179210419",
  appId: "1:698179210419:web:fc18942dc3afafc00b34c6",
  measurementId: "G-N8CEC9MLHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
