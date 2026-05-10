import { auth, db } from "./firebase.js";

import {

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

  doc,
  setDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// REGISTER USER
window.registerUser = async function(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try{

    const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;


    // Store user data
    await setDoc(doc(db,"users",user.uid),{

      email: email

    });

    document.getElementById("message").innerHTML =
    "User Registered Successfully";

  }

  catch(error){

    document.getElementById("message").innerHTML =
    error.message;

  }

};



// LOGIN USER
window.loginUser = async function(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try{

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    document.getElementById("message").innerHTML =
    "Login Successful";

  }

  catch(error){

    document.getElementById("message").innerHTML =
    error.message;

  }

};