import AdminEditButton from "@/components/AdminEditButton";
import { fetchProjectById } from "@/lib/projectsService";
import Image from "next/image";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await fetchProjectById(id);

  return (
    project && (
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

        <p className="text-4xl">{project.title}</p>

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
    )
  );
}
