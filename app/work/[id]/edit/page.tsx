"use client";

import React, { useState } from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownEditor from "@/components/MarkdownEditor";

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

function ProjectEditPage() {
  const [markdown, setMarkdown] = useState(project.markdown || "");

  // this gets updated when the image link field changes
  const [imageLinkField, setImageLinkField] = useState(project.image || "");

  // this gets updated when the "save" button is triggered
  const [imageLink, setImageLink] = useState(project.image || "");


  function refetchProjectImage() {
    setImageLink(imageLinkField);
  }

  return (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px] gap-8">
      <p className="text-4xl">EDIT PROJECT</p>

      {/* image */}
      <div className="w-80 h-52 sm:w-96 sm:h-72 border-2 overflow-hidden relative">
        <Image
          src={imageLink}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* image link */}
      <div className="w-full">
        <label htmlFor="title">Image Link</label>
        <textarea
          id="image-link"
          className="p-2 w-full h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Image Link..."
          // defaultValue={project.image}
          value={imageLinkField}
          onChange={(e) => setImageLinkField(e.target.value)}
          rows={8}
        ></textarea>
        <div className="flex flex-row items-center align-middle justify-between">
          <a
            onClick={async () =>
              setImageLinkField(await navigator.clipboard.readText())
            }
            className="border-2 p-2 bg-amber-100"
          >
            Paste From Clipboard
          </a>
          <a
            onClick={() => refetchProjectImage()}
            className="border-2 p-2 bg-blue-200"
          >
            Save
          </a>
        </div>
      </div>

      {/* title */}
      <div className="w-full">
        <label htmlFor="title">Title</label>
        <textarea
          id="title"
          className="p-2 w-full h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project Title..."
          defaultValue={project.title}
        ></textarea>
      </div>

      {/* markdown edit */}
      <div className="w-full">
        <div className="flex flex-row justify-between align-middle items-center gap-2 mb-1">
          <label
            className="align-middle h-min"
            htmlFor="markdown-edit"
            id="markdown-edit"
          >
            Project Description
          </label>
          <a href="#markdown-preview" className="border-2 p-2">
            Preview
          </a>
        </div>
        <MarkdownEditor
          value={markdown}
          setValue={setMarkdown}
        ></MarkdownEditor>
      </div>

      {/* markdown preview */}
      <div className="w-full">
        <div className="flex flex-row justify-between align-middle items-center gap-2 mb-1">
          <label
            className="align-middle h-min"
            htmlFor="markdown-preview"
            id="markdown-preview"
          >
            Markdown Preview
          </label>
          <a href="#markdown-edit" className="border-2 p-2">
            Edit
          </a>
        </div>
        <div className="prose prose-lg flex flex-col justify-center align-middle [&>*]:mt-0 [&>*]:mb-6 border-2 p-2">
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
      </div>

      {/* project link */}
      <div className="w-full">
        <label className="align-middle h-min" htmlFor="project-link">
          Project Link
        </label>
        <textarea
          id="project-link"
          className="p-2 w-full h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project Link..."
          defaultValue={project.link}
        ></textarea>
      </div>

      <button className="border-2 bg-green-100 p-4 text-3xl w-80"> Save Project</button>
    </div>
  );
}

export default ProjectEditPage;
