// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWe5fY4ocOI_lRzmaIEC3g8kUST2jVmqA",
  authDomain: "todo-app-edc65.firebaseapp.com",
  projectId: "todo-app-edc65",
  storageBucket: "todo-app-edc65.appspot.com",
  messagingSenderId: "1024539889987",
  appId: "1:1024539889987:web:a603416878dc2e0b0ddff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;