export class Language {
  private readonly name: string;
  private readonly level: string;


  constructor(name,level){
    this.name=name;
    this.level=level;
  }

  getName(){
    return this.name;
  }

  getLevel(){
    return this.level;
  }
}
