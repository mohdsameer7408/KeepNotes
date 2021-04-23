import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiVq2a6zDPgnR0SdYi73pm9JmNiFx4q2Y",
  authDomain: "keepnotes-8bb6b.firebaseapp.com",
  projectId: "keepnotes-8bb6b",
  storageBucket: "keepnotes-8bb6b.appspot.com",
  messagingSenderId: "346723472320",
  appId: "1:346723472320:web:b6134accf18054fd2a6e25",
  measurementId: "G-90FKQ1T5ZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
