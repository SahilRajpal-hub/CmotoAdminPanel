import firebase from 'firebase/app';
import 'firebase/database'

const config= {
  apiKey: "AIzaSyAQer6otB3blqGh3CKrviuemGMUwd6NNDo",
  authDomain: "como-69a54.firebaseapp.com",
  databaseURL: "https://como-69a54-default-rtdb.firebaseio.com",
  projectId: "como-69a54",
  storageBucket: "como-69a54.appspot.com",
  messagingSenderId: "605959152527",
  appId: "1:605959152527:web:f0ef2156ca9c11576fa1fa",
  measurementId: "G-D2V0V7HSGB"
};
firebase.initializeApp(config);


export default firebase;