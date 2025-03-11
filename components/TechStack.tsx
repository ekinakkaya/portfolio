import Image from "next/image";

const techStack = [
  {
    name: "Node.js",
    src: "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
  {
    name: "Express.js",
    src: "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white",
  },
  {
    name: "Next.js",
    src: "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  },
  {
    name: "React",
    src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    name: "shadcn/ui",
    src: "https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white",
  },
  {
    name: "Vite",
    src: "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E",
  },
  {
    name: "Tailwind CSS",
    src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  },
  {
    name: "TypeScript",
    src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    name: "NestJS",
    src: "https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
  },
  {
    name: "Bootstrap",
    src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
  },
  {
    name: "Docker",
    src: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "Electron",
    src: "https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9",
  },
  {
    name: "Firebase",
    src: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
  },
  {
    name: "Spring Boot",
    src: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
  },
  {
    name: "CSS3",
    src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    name: "Python",
    src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
  },
];

const cloudProviders = [
  {
    name: "Amazon AWS",
    src: "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
  },
  {
    name: "GitHub Actions",
    src: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
  },
  {
    name: "Vercel",
    src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
  },
];

export default function TechStackSection() {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center p-10">
      {/* Tech Stack */}
      <div className="w-full max-w-6xl">
        <h2 className="text-xl mb-4 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center">
              <Image
                src={tech.src}
                alt={tech.name}
                width={0}
                height={0}
                className="h-auto w-auto max-h-24"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Providers */}
      <div className="w-full max-w-6xl">
        <h2 className="text-xl mb-4 text-center">Cloud Providers</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {cloudProviders.map((cloud) => (
            <div key={cloud.name} className="flex items-center">
              <Image
                src={cloud.src}
                alt={cloud.name}
                width={0}
                height={0}
                className="h-auto w-auto max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
