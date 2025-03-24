import AdminEditButton from "@/components/AdminEditButton";
import Image from "next/image";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const project = {
  id: 1,
  title: "YC Directory",
  description:
    "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.",
  markdown: `
A platform built with **Next.js 15** where entrepreneurs can:
- Submit their startup ideas for virtual pitch competitions  
- Browse and discover other innovative pitches  
- Gain exposure through a clean, minimalistic design focused on smooth user experience

---

## ✨ Features
- 🚀 Submit startup pitches easily
- 🔍 Explore pitches from other founders
- 🎨 Minimal and intuitive UI for better engagement
- 🏆 Virtual competitions to gain traction and feedback

---

## 📸 Screenshot
![YC Directory Screenshot](https://github.com/ekinakkaya/yc_directory/blob/main/screenshot.png)

---

## 🔗 Live Project / Source Code  
👉 [Visit YC Directory on GitHub](https://github.com/ekinakkaya/yc_directory)
  `,
  image:
    "https://github.com/ekinakkaya/yc_directory/blob/main/screenshot.png?raw=true",
  link: "https://github.com/ekinakkaya/yc_directory",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px] gap-8">
      <AdminEditButton id={id} />

      <div className="w-80 h-52 sm:w-96 sm:h-72 border-2 overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-4xl">
        {project.title} ({project.id})
      </p>

      <div className="prose prose-lg flex flex-col items-center justify-center align-middle [&>*]:mt-0 [&>*]:mb-6">
        <Markdown remarkPlugins={[remarkGfm]}>{project.markdown}</Markdown>
      </div>

      {project.link && (
        <a className="text-3xl underline text-blue-500" href={project.link}>
          {" "}
          Github Link
        </a>
      )}

    </div>
  );
}
