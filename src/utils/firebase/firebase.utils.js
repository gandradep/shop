// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLxmwJjzJhFZ9TJazeWD5NlNNCnx9wSQ",
  authDomain: "shop-db-d947d.firebaseapp.com",
  projectId: "shop-db-d947d",
  storageBucket: "shop-db-d947d.appspot.com",
  messagingSenderId: "144478107638",
  appId: "1:144478107638:web:90de2da659c9407f96f9d7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promp: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);