import ProjectCard from "@/components/ProjectCard";
import React from "react";

import { fetchProjects } from "@/lib/projectsService";

// interface ProjectData {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const projects: ProjectData[] = [
//   {
//     id: 1,
//     title: "YC Directory",
//     description: "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.",
//     image: "https://github.com/ekinakkaya/yc_directory/blob/main/screenshot.png?raw=true",
//     link: "https://github.com/ekinakkaya/yc_directory",
//   },
//   {
//     id: 2,
//     title: "Lilchat",
//     description: "A web interface that can be used for having a chat interface with any OpenAI compatible LLM endpoint.",
//     image: "https://github.com/ekinakkaya/lilchat/raw/main/images/image-3.png",
//     link: "https://github.com/ekinakkaya/lilchat",
//   },
//   {
//     id: 3,
//     title: "cutie",
//     description: "A small interpreted language implementation based on the book \"Crafting Interpreters by Robert Nystrom\".",
//     image: "https://dummyimage.com/600x400/000/fff&text=cutie",
//     link: "https://github.com/ekinakkaya/cutie",
//   },
//   {
//     id: 4,
//     title: "Gesture Recognition",
//     description: "real time gesture recognition program written in python.",
//     image: "https://github.com/ekinakkaya/gesture-recognition/raw/main/example.png",
//     link: "https://github.com/ekinakkaya/gesture-recognition",
//   },
//   {
//     id: 5,
//     title: "IMDb Scraper",
//     description: "A web scraper tool for fetching ALL the movie information in the IMDb database.",
//     image: "https://github.com/ekinakkaya/imdb-scraper/blob/main/screenshot.png?raw=true",
//     link: "https://github.com/ekinakkaya/imdb-scraper",
//   },
//   {
//     id: 6,
//     title: "efm",
//     description: "A file manager that I have written in 2020. Aimed to be lightweight and reliable, simple, yet functional. Written in C and only uses standard Linux libraries and packages.",
//     image: "https://dummyimage.com/600x400/000/fff&text=efm",
//     link: "https://github.com/ekinakkaya/efm",
//   },
//   {
//     id: 7,
//     title: "easyppm",
//     description: "Small .ppm library for creating image files. Provides basic functions like painting pixels or chunks. ffmpeg can be used to convert ppm files to png files.",
//     image: "https://github.com/ekinakkaya/easyppm/raw/main/README-images/avatar.png",
//     link: "https://github.com/ekinakkaya/easyppm",
//   },
// ];

// export const getStaticProps = async () => {
//   const projects = await fetchProjects();

//   return {
//     props: {
//       projects: projects.map(p => p.toFirestore())
//     },
//     revalidate: 60
//   }
// }

async function Page() {
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col min-h-screen p-8 justify-start items-center sm:gap-16">
      <span className="text-3xl mt-2 mb-4 underline">my work</span>

      <div className=" flex gap-4 justify-center align-center flex-wrap">
        {projects.map((element, index) => (
          <ProjectCard
            // key={element.id}
            key={index}
            title={element.title}
            description={element.description}
            image={element.image}
            // link={element.link}
            link={`/work/${element.docId}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
