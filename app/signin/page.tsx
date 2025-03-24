"use client";

import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<User | null>(null);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [currentUserMail, setCurrentUserMail] = useState<string | null>(null);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setCurrentUserMail(user.email);
        setErrorCode("");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorCode(error.code);
        setErrorMessage(error.message);
        setUser(null);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.replace("/signin");
      })
      .catch((error) => {
        error("An error occured while logging out.");
        error(JSON.stringify(error));
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserMail(user.email);
      } else {
        setCurrentUserMail(null);
      }
    });
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px] gap-4 justify-center">
      {currentUserMail ? (
        <>
          <p className="text-base">You are signed in as</p>
          <p className="text-xl">{currentUserMail}</p>
          <button className="p-4 bg-red-200 w-64 border-2 text-xl" onClick={logOut}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-cyan-900 text-white w-80 p-2 border-cyan-900 focus:border-cyan-950 focus:ring-cyan-950"
          />

          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-cyan-900 text-white w-80 p-2 border-cyan-900 focus:border-cyan-950 focus:ring-cyan-950"
          />

          <button
            className="p-4 text-3xl border-2 bg-cyan-100 hover:bg-cyan-300"
            onClick={signIn}
          >
            Login
          </button>

          {/* Display errors if they exist */}
          {errorCode && <p>Error Code: {errorCode}</p>}
          {errorMessage && <p>Error Message: {errorMessage}</p>}

          {/* Display user object for testing */}
          {user && <p>User: {JSON.stringify(user)}</p>}
        </>
      )}
    </div>
  );
}

export default SignInPage;
