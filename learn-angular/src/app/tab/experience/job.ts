export class Job{
  private readonly startWorking: Date;
  private readonly company: string;

  constructor(startWorking, company){
    this.startWorking=startWorking;
    this.company=company;
  }

  getStartWorking(){
    return this.startWorking;
  }

  getCompany(){
    return this.company;
  }
}
