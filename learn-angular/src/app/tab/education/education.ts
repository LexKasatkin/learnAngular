export class Education{
  private readonly year:Date;
  private readonly university:string;
  private readonly level:string;

  getYear(){
    return this.year;
  }

  getUniversity(){
    return this.university;
  }

  getLevel(){
    return this.level;
  }

  constructor(year: Date, university: string, level: string) {
    this.year = year;
    this.university = university;
    this.level=level;
  }
}
