// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

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
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


// export function isLoggedIn() {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       return true;
//     }

//     return false;
//   });
// }
