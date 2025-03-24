// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQchQ_5q63MBw15heHl8zPrLZxLXiIRfM",
  authDomain: "ekinportfolio.firebaseapp.com",
  projectId: "ekinportfolio",
  storageBucket: "ekinportfolio.firebasestorage.app",
  messagingSenderId: "706709797259",
  appId: "1:706709797259:web:1e986b999eae5ebca9978e",
  measurementId: "G-7SC6FCCYV0",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export function isLoggedIn() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    }

    return false;
  });
}
