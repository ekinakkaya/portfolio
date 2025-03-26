"use client";

import React from "react";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/lib/projectsService";

function AdminDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getLogin();
  }, []);

  function getLogin() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }

  async function onDeleteProjectClick() {
    await deleteProject(id).then(() => {
      router.replace("/work");
    });
  }

  return (
    isLoggedIn && (
      <div className="w-80 flex flex-col items-center align-middle justify-center">
        <div className="w-80 h-1 bg-gray-600 mb-8"></div>
        <button
          className="w-80 bg-rose-300 p-4 text-2xl border-2 hover:bg-rose-500"
          onClick={onDeleteProjectClick}
        >
          Delete This Project
        </button>
      </div>
    )
  );
}

export default AdminDeleteButton;
