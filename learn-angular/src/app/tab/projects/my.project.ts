export class MyProject {
  link: string;
  name: string;

  constructor(link, name) {
    this.link=link;
    this.name=name;
  }

  getLink() {
    return this.link;
  }

  getProjectName() {
    return this.name;
  }
}
