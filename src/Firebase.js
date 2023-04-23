import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCH3W3bHJ8HfEzmzNr8IcbX3ofLsuDoVrs",
    authDomain: "projetoweb-77380.firebaseapp.com",
    projectId: "projetoweb-77380",
    storageBucket: "projetoweb-77380.appspot.com",
    messagingSenderId: "925406803307",
    appId: "1:925406803307:web:2a55706fe22fe1ee1ec82e"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;