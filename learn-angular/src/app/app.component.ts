import { Component } from '@angular/core';
import {SkillComponent} from "./user/skill.component";
import {SkillsService} from "./user/skills.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SkillsService]
})
export class AppComponent {
  title = 'Портфолио Касаткин А.С.';
  skills=[];
  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.skills;
  }
}

