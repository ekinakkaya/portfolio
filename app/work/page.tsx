import React from "react";

import NewProjectButton from "@/components/NewProjectButton";
import ProjectsList from "@/components/ProjectsList";

async function Page() {

  return (
    <div className="flex flex-col min-h-screen p-8 justify-start items-center sm:gap-16">
      <span className="text-3xl mt-2 mb-4 underline">my work</span>

      <div className=" flex gap-4 justify-center align-center flex-wrap">
        <ProjectsList/>

        <NewProjectButton/>
      </div>

    </div>
  );
}

export default Page;
