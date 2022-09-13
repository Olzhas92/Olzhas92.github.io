// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0qK8grxf2vjYgQEhwMlRT01rQFk8-Ufo",
  authDomain: "telegram-projec.firebaseapp.com",
  projectId: "telegram-projec",
  storageBucket: "telegram-projec.appspot.com",
  messagingSenderId: "33212221978",
  appId: "1:33212221978:web:f06497fbea774036181fa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
