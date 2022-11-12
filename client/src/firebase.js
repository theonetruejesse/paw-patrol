import firebase from "firebase/app";
import "firebase/auth";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBVLjegqXMDp0MVKB9WMYZnd0_XsmpBTyI",
  authDomain: "pawpatrol-286d5.firebaseapp.com",
  projectId: "pawpatrol-286d5",
  storageBucket: "pawpatrol-286d5.appspot.com",
  messagingSenderId: "170850842401",
  appId: "1:170850842401:web:99a7acc4d942e919cff060",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = app.auth();
export default app;
