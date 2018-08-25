export class Project {
  private readonly link: string;
  private readonly name: string;

  constructor(link, name) {
    this.link=link;
    this.name=name;
  }

  getLink() {
    return this.link;
  }

  getName() {
    return this.name;
  }
}
