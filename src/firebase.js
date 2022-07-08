import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-nrXLdwSie3cXEVyddyaBS_FND3MJBto",
  authDomain: "what-app-clone-9aef8.firebaseapp.com",
  projectId: "what-app-clone-9aef8",
  storageBucket: "what-app-clone-9aef8.appspot.com",
  messagingSenderId: "661737660702",
  appId: "1:661737660702:web:f6fd49bd7981cdd981290f",
  measurementId: "G-S3YL1WC5EZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
