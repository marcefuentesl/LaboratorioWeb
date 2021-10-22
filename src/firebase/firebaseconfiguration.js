import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC7-ZgHHMm6ZLKydpVcQILOo5l9AqJxfU",
  authDomain: "labweb-3d2b5.firebaseapp.com",
  projectId: "labweb-3d2b5",
  storageBucket: "labweb-3d2b5.appspot.com",
  messagingSenderId: "722393566187",
  appId: "1:722393566187:web:1c5c6cc6259b0ae42fe7ae"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
