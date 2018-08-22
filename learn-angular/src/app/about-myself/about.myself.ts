import {Injectable} from "@angular/core";
@Injectable()
export class AboutMyself {
  private readonly name: string;
  private readonly dateBirthday: Date;
  private readonly phoneNumber: string;
  private readonly email: string;
  private readonly startOfWorking: Date;

  constructor(name: string, dateBirthday: Date, phoneNumber: string, email: string, startOfWorking:Date) {
    this.name = name;
    this.dateBirthday = dateBirthday;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.startOfWorking=startOfWorking;
  }

  getName(): string {
    return this.name;
  }

  getDateBirthday(): Date{
    return this.dateBirthday;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }


  getStartOfWorking(): Date {
    return this.startOfWorking;
  }
}
