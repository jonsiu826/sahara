// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCMWNZeR42M_Km7q276A2itUp4eNh_4L4",
  authDomain: "sahara-7331b.firebaseapp.com",
  projectId: "sahara-7331b",
  storageBucket: "sahara-7331b.appspot.com",
  messagingSenderId: "1049027595375",
  appId: "1:1049027595375:web:5d80866f9b6527fa27519a",
  measurementId: "G-193PKBBN8G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };