import { Component, OnInit } from '@angular/core';
import {Job} from "./job";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobs=[];
  experience: Date;

  constructor() {
    this.jobs=[
      new Job(new Date(2014, 1, 24), "ООО \"Вымпелком\""),
      new Job(new Date(2016, 5, 10), "ООО \"Ураган\"")
    ];
    this.experience=new Date(new Date().getTime()-this.jobs[0].getStartWorking().getTime());
  }

  ngOnInit() {
  }

}
