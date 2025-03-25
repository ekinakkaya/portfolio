import { ProjectData, ProjectDataInterface } from "@/types/ProjectData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const DB_DOC_NAME = "projects";

export const fetchProjects = async (): Promise<ProjectData[]> => {
  const allDocumentsQuerySnapshot = await getDocs(collection(db, DB_DOC_NAME));
  const projects: ProjectData[] = allDocumentsQuerySnapshot.docs.map((doc) => {
    console.log(doc.data());
    return new ProjectData(doc.data() as ProjectDataInterface);
  });

  return projects;
};
