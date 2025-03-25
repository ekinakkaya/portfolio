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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<User | null>(null);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [currentUserMail, setCurrentUserMail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(true); // 👈 prevent UI flash

  const signIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const signedInUser = userCredential.user;
      setUser(signedInUser);
      setCurrentUserMail(signedInUser.email);
      setErrorCode("");
      setErrorMessage("");
      toast.success("Logged in successfully");
    } catch (error: any) {
      setErrorCode(error.code);
      setErrorMessage(error.message);
      setUser(null);
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out.");
      router.replace("/signin");
    } catch (error) {
      toast.error("An error occurred while logging out.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUserMail(user?.email ?? null);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 👇 Prevent rendering until Firebase auth status is known
  if (authLoading) {
    return (
      <div className="flex w-screen h-screen align-middle justify-center items-center">
        <AiOutlineLoading3Quarters size={64} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px] gap-4 justify-center">
      <ToastContainer />

      {currentUserMail ? (
        <>
          <p className="text-base">You are signed in as</p>
          <p className="text-xl">{currentUserMail}</p>
          <button
            className="p-4 bg-red-200 w-64 border-2 text-xl"
            onClick={logOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
          className="flex flex-col items-center gap-4"
        >
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
            required
          />

          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <div className="relative w-80">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border bg-cyan-900 text-white w-full p-2 border-cyan-900 focus:border-cyan-950 focus:ring-cyan-950"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="p-4 text-3xl border-2 bg-cyan-100 hover:bg-cyan-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {errorCode && <p>Error Code: {errorCode}</p>}
          {errorMessage && <p>Error Message: {errorMessage}</p>}
          {user && <p>User: {JSON.stringify(user)}</p>}
        </form>
      )}
    </div>
  );
}

export default SignInPage;
