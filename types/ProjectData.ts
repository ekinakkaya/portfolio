import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface ProjectDataInterface {
  id: number;
  title: string;
  description: string;
  markdown: string;
  image: string;
  link: string;
}

export class ProjectData implements ProjectDataInterface {
  id: number;
  title: string;
  description: string;
  markdown: string;
  image: string;
  link: string;

  constructor(p: Partial<ProjectDataInterface>) {
    this.id = p.id ?? 0;
    this.title = p.title ?? "";
    this.description = p.description ?? "";
    this.markdown = p.markdown ?? "";
    this.image = p.image ?? "";
    this.link = p.link ?? "";
  }

  toFirestore() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      markdown: this.markdown,
      image: this.image,
      link: this.link,
    };
  }

  static fromFirestore(snapshot: QueryDocumentSnapshot, options?: SnapshotOptions) {
    const data = snapshot.data(options) as ProjectDataInterface;
    return new ProjectData(data);
  }
}
