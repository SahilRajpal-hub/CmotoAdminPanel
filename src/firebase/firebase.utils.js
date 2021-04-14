import firebase from 'firebase/app';
import 'firebase/database'

const config={
    apiKey: "AIzaSyA2BXvxqGhzbqa-9eCg1EXMA7u3u0G8UsM",
    authDomain: "cmoto-4267a.firebaseapp.com",
    databaseURL: "https://cmoto-4267a.firebaseio.com",
    projectId: "cmoto-4267a",
    storageBucket: "cmoto-4267a.appspot.com",
    messagingSenderId: "416346424448",
    appId: "1:416346424448:web:e7c40ab227e4e2c9341265",
    measurementId: "G-LLBGG2X7FH"
  };
firebase.initializeApp(config);


export default firebase;