// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjK1O8L161_Cq-pXBUExrrdXLA3JouRk",
  authDomain: "website-f07b5.firebaseapp.com",
  projectId: "website-f07b5",
  storageBucket: "website-f07b5.appspot.com",
  messagingSenderId: "326744406113",
  appId: "1:326744406113:web:cdb6cb3dbb84d2f799d220",
  measurementId: "G-64RHVCZZTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
