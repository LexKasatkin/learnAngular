import { Component, OnInit } from '@angular/core';
import {Education} from "./education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations=[];
  constructor() {
    this.educations=[
      new Education(
        new Date(2016),
        "Сибирский государственный аэрокосмический университет",
        "Бакалавриат"
      ),
        new Education(
          new Date(2018),
        "Сибирский государственный аэрокосмический университет",
        "Магистратура"
  )
  ]}

  ngOnInit() {
  }

}
