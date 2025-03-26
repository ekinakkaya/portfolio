import { ProjectData } from "@/types/ProjectData";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getDocsFromServer,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

export const saveProject = async (p: ProjectData) => {
  if (p.docId) {
    const docRef = doc(db, DB_DOC_NAME, p.docId);
    updateDoc(docRef, {
      ...p,
    });
  } else {
    const newDocRef = doc(collection(db, DB_DOC_NAME));
    await setDoc(newDocRef, p);
  }
};

export const createNewProject = async () => {
  // const docRef = await addDoc(
  await addDoc(
    collection(db, DB_DOC_NAME),
    new ProjectData({
      title: "New Document ",
      description: "" + new Date(),
    }).toFirestore()
  );
};

export const deleteProject = async (id: string) => {
  await deleteDoc(doc(db, DB_DOC_NAME, id));
};

export const subscribeToProjects = (
  callback: (projects: ProjectData[]) => void
) => {
  const colRef = collection(db, DB_DOC_NAME);

  const unsubscribe = onSnapshot(colRef, (snapshot) => {
    const projects = snapshot.docs.map((doc) => ProjectData.fromFirestore(doc));
    callback(projects);
  });

  return unsubscribe;
};
