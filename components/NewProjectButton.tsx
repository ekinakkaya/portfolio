"use client";
import { createNewProject } from "@/lib/projectsService";
import React from "react";
import { useRouter } from "next/navigation";

function NewProjectButton() {
  const router = useRouter();

  async function createProject() {
    await createNewProject();
    await router.refresh();
  }

  return (
    <button
      className="fixed bg-gray-800 text-white w-12 h-12 right-4 bottom-4 text-2xl align-middle items-center border-2 border-amber-50"
      onClick={createProject}
    >
      {" "}
      +{" "}
    </button>
  );
}

export default NewProjectButton;
