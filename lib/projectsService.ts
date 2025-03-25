import { ProjectData } from "@/types/ProjectData";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const DB_DOC_NAME = "projects";

export const fetchProjects = async (): Promise<ProjectData[]> => {
  const allDocumentsQuerySnapshot = await getDocs(collection(db, DB_DOC_NAME));
  const projects: ProjectData[] = allDocumentsQuerySnapshot.docs.map((doc) => {
    // return new ProjectData(doc.data() as ProjectDataInterface);
    return ProjectData.fromFirestore(doc);
  });

  return projects;
};

export const fetchProjectById = async (
  id: string
): Promise<ProjectData | null> => {
  const docRef = doc(db, DB_DOC_NAME, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return ProjectData.fromFirestore(docSnap);
};
