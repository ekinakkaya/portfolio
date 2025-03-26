"use client";
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { ProjectData } from '@/types/ProjectData'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { subscribeToProjects } from '@/lib/projectsService';

function ProjectsList() {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToProjects(setProjects);
    return () => unsubscribe();
  }, [])

  if (projects.length === 0) {
    return(
      <div className="flex w-full h-full align-middle justify-center items-center">
        <AiOutlineLoading3Quarters size={64} className="animate-spin" />
      </div>
    )
  }

  return (
    <>
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
    </>
  )
}

export default ProjectsList