import ProjectCard from "@/components/ProjectCard";
import React from "react";

function page() {
  return (
    <div className="flex flex-col min-h-screen p-8 justify-start items-center sm:gap-16">
      <span className="text-3xl mt-2 mb-4 underline">my work</span>

      <div className=" flex gap-4 justify-center align-center flex-wrap">
        <ProjectCard
          title="Project 1"
          description="asdfsadfsadfasdf"
          image="https://placehold.co/400"
          link="#"
        />
      </div>
    </div>
  );
}

export default page;
