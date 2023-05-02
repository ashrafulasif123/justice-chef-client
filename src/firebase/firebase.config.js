// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN2mxCDQK3hmc0OsIwodJPyNj4cJ6sdlM",
  authDomain: "chef-auth-router-client.firebaseapp.com",
  projectId: "chef-auth-router-client",
  storageBucket: "chef-auth-router-client.appspot.com",
  messagingSenderId: "868791039161",
  appId: "1:868791039161:web:89bc4cfa823c6b6a829768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;