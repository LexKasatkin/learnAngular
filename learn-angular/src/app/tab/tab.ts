export class Tab {
  private active: boolean;
  private readonly name: string

  constructor(name) {
    this.active = false;
    this.name = name;
  }

  setActive(value:boolean){
    this.active=value;
  }

  getActive(){
    return this.active;
  }
}
