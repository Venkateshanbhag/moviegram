// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import {getAuth, createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNnxG1TDH7YcEeM1rnT_vmdsBCLcPkLs",
  authDomain: "moviegram-368dc.firebaseapp.com",
  projectId: "moviegram-368dc",
  storageBucket: "moviegram-368dc.firebasestorage.app",
  messagingSenderId: "856476542884",
  appId: "1:856476542884:web:079241e7d73e062da5c331",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('submit')
submit.addEventListener("click", function (event) {
  event.preventDefault()
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...")

      window.location.href="accountcreation.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
