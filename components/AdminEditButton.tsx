"use client";

import React from "react";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function EditButton({ id }: { id: string }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getLogin();
  }, []);

  function getLogin() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...

        setIsLoggedIn(true);
      } else {
        // User is signed out
        // ...
        setIsLoggedIn(false);
      }
    });
  }

  return (
    isLoggedIn && (
      <div className="w-80 flex flex-col items-center align-middle justify-center">
        <p className="text-3xl">You are an admin.</p>
        <button
          className="w-80 bg-lime-200 p-4 text-3xl border-2 hover:bg-lime-400"
          onClick={() => router.push(`/work/${id}/edit`)}
        >
          Edit This Project
        </button>
        <div className="w-80 h-1 bg-gray-600 mt-8"></div>
      </div>
    )
  );
}

export default EditButton;
