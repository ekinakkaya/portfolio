import React from "react";
import Image from "next/image";
import Link from "next/link";

// props
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <Link href={link}>
      <div
        className=" mb-4 align-middle items-center flex flex-col max-w-84 w-84 sm:max-w-96 sm:w-96  
        animate__animated animate__fadeInLeft
      "
      >
        <div className=" w-80 h-52 sm:w-96 sm:h-72 border-2 overflow-hidden">
          <div className=" overflow-hidden ">
            <Image src={image} alt="" width={400} height={400} />
          </div>
        </div>
        <h1 className="text-2xl pt-2 underline">{title}</h1>
        <p className="text-base pt-2 sm:max-w-3/4 text-pretty">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
