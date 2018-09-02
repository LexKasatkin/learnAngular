import {Injectable} from "@angular/core";
@Injectable()
export class AboutMyself {
  private readonly name: string;
  private readonly dateBirthday: Date;

  constructor(name: string, dateBirthday: Date) {
    this.name = name;
    this.dateBirthday = dateBirthday;
  }

  getName(): string {
    return this.name;
  }

  getDateBirthday(): Date{
    return this.dateBirthday;
  }
}
