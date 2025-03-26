"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownEditor from "@/components/MarkdownEditor";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter, useParams } from "next/navigation";
import { fetchProjectById, saveProject } from "@/lib/projectsService";
import { ProjectData } from "@/types/ProjectData";

function ProjectEditPage() {
  const params = useParams();
  const id = params.id as string;

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [imageLink, setImageLink] = useState(""); // this gets updated when the "save" button is triggered
  const [link, setLink] = useState("");

  const [imageLinkField, setImageLinkField] = useState(""); // this gets updated when the image link field changes

  const [loggedIn, setLoggedIn] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  async function save() {
    setIsSaving(true);
    await saveProject(
      new ProjectData({
        docId: id,
        title: title,
        description: description,
        markdown: markdown,
        image: imageLink,
        link: link,
      })
    );
    setIsSaving(false);
  }

  useEffect(() => {
    async function fetchProject(id: string) {
      const p = await fetchProjectById(id);

      setTitle(p?.title || "");
      setDescription(p?.description || "");
      setMarkdown(p?.markdown || "");
      setImageLink(p?.image || "");
      setImageLinkField(p?.image || "");
      setLink(p?.link || "");
    }

    fetchProject(id);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        router.replace(`/signin`);
      }
    });
  }, []);

  function refetchProjectImage() {
    setImageLink(imageLinkField);
  }

  if (isSaving) {
  }

  return loggedIn ? (
    <div className="min-h-screen p-8 flex flex-col align-middle items-center justify-self-center sm:max-w-[700px] gap-8">
      <p className="text-4xl">EDIT PROJECT</p>

      {/* image */}
      <div className="w-80 h-52 sm:w-96 sm:h-72 border-2 overflow-hidden relative">
        {imageLink && (
          <Image
            src={imageLink}
            alt={title || ""}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* image link */}
      <div className="w-full">
        <label htmlFor="title">Image Link</label>
        <textarea
          id="image-link"
          className="p-2 w-full h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Image Link..."
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>

      {/* description */}
      <div className="w-full">
        <label htmlFor="description">Short Description</label>
        <textarea
          id="description"
          className="p-2 w-full h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Short Project Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
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
          defaultValue={link}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        ></textarea>
      </div>

      <button
        className="border-2 bg-green-100 p-4 text-3xl w-80"
        onClick={save}
      >
        {" "}
        Save Project
      </button>
    </div>
  ) : (
    <div className="flex items-center justify-center align-middle w-screen h-screen">
      <p className="text-3xl p-4 text-center">
        If you are not logged in, please login.
      </p>
    </div>
  );
}

export default ProjectEditPage;
