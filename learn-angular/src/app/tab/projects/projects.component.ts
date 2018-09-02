import {Component, OnInit} from '@angular/core';
import {MyProject} from "./my.project";
import {LocalStorage} from "../../local.storage";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    new MyProject("http://github.com/LexKasatkin/testCourse",
      "Тестовое задание"), new MyProject("http://github.com/LexKasatkin/learnAngular",
      "Репозиторий для заданий по Angular")
  ];
  inputHref: string;
  inputName: string;
  inputBoolNewItem: boolean;
  private readonly localStorage: LocalStorage;

  constructor() {
    this.localStorage=new LocalStorage("projects");
    if(this.localStorage.readWithCheck()==false) {
      this.projects = this.localStorage.read();
    }
    console.log(this.projects);
  }

  addNewProject() {
    if (this.inputHref != null && this.inputName != null) {
      let project = new MyProject(this.inputHref, this.inputName);
      this.projects.push(project);
      this.inputBoolNewItem = false;
      this.inputName = "";
      this.inputHref = "";
      this.localStorage.add(this.projects);
    }
  }

  ngOnInit() {
  }

  setNewItem() {
    this.inputBoolNewItem = true;
  }
}
