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

  constructor(p: ProjectDataInterface) {
    this.id = p.id;
    this.title = p.title;
    this.description = p.description;
    this.markdown = p.markdown;
    this.image = p.image;
    this.link = p.link;
  }

    toFirestore () {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        markdown: this.markdown,
        image: this.image,
        link: this.link,
      }
    }

    fromFirestore (snapshot: any, options: any) {
        const data = snapshot.data(options);
        return new ProjectData(data);
    }

}
