import {Component} from '@angular/core';
import {SkillsService} from "../skill/skills.service";
import {AboutMyself} from "./about.myself";

@Component({
  selector: 'app-about-myself',
  templateUrl: './about-myself.component.html',
  styleUrls: ['./about-myself.component.css'],
  providers: [SkillsService]
})
export class AboutMyselfComponent {
  private readonly aboutMyself: AboutMyself;//о себе
  private readonly skills = [];//навыки
  private skillsService: SkillsService;//сервис, который предоставляет список навыков
  private readonly experience: Date;//опыт работы

  constructor(skillsService: SkillsService) {
    this.skillsService = skillsService;
    this.skills = this.skillsService.skills;
    this.aboutMyself = new AboutMyself("Дарт Мол",
      new Date(1993, 8, 26),
      "+79994416308",
      "kasatkin-11@yandex.ru",
      new Date(2016, 4, 10)
    );
    this.experience = new Date();
    this.experience.setFullYear(new Date().getFullYear() - this.aboutMyself.getStartOfWorking().getFullYear());
    this.experience.setMonth(new Date().getMonth() - this.aboutMyself.getStartOfWorking().getMonth());
  }

  getAboutMyself(): AboutMyself {
    return this.aboutMyself;
  }
}
