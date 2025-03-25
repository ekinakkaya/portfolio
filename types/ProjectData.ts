import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface ProjectDataInterface {
  title: string;
  description: string;
  markdown: string;
  image: string;
  link: string;
  docId?: string;
}

export class ProjectData implements ProjectDataInterface {
  title: string;
  description: string;
  markdown: string;
  image: string;
  link: string;
  docId?: string;

  constructor(p: Partial<ProjectDataInterface>) {
    this.title = p.title ?? "";
    this.description = p.description ?? "";
    this.markdown = p.markdown ?? "";
    this.image = p.image ?? "";
    this.link = p.link ?? "";
    this.docId = p.docId;
  }

  toFirestore() {
    return {
      title: this.title,
      description: this.description,
      markdown: this.markdown,
      image: this.image,
      link: this.link,
    };
  }

  static fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options?: SnapshotOptions
  ) {
    const data = snapshot.data(options) as ProjectDataInterface;
    return new ProjectData({
      ...data,
      docId: snapshot.id,
    });
  }
}
