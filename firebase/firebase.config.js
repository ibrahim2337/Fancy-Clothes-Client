// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDobX4DhDifmv37lpgfpRZYMarDZqPllno",
  authDomain: "fancy-clothes-feec4.firebaseapp.com",
  projectId: "fancy-clothes-feec4",
  storageBucket: "fancy-clothes-feec4.appspot.com",
  messagingSenderId: "595071728369",
  appId: "1:595071728369:web:c41c9bb3b7c8838e000750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;