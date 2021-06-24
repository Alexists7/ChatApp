import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDHE6QAiT6NzFO7Lem4RepLouQcKz7EwdI",
    authDomain: "chatapp-e7648.firebaseapp.com",
    projectId: "chatapp-e7648",
    storageBucket: "chatapp-e7648.appspot.com",
    messagingSenderId: "764421362665",
    appId: "1:764421362665:web:11b4ad2c0a27a697d53178",
  })
  .auth();
