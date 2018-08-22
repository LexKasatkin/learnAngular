import {Component, OnDestroy, OnInit} from '@angular/core';
import {SkillsService} from "../skill/skills.service";
import {AboutMyself} from "./about.myself";

@Component({
  selector: 'app-about-myself',
  templateUrl: './about-myself.component.html',
  styleUrls: ['./about-myself.component.css'],
  providers:[SkillsService]
})
export class AboutMyselfComponent implements OnInit, OnDestroy {
  private readonly aboutMyself: AboutMyself;//о себе
  private readonly  skills=[];//навыки
  private skillsService:SkillsService;//сервис, который предоставляет список навыков
  private interestingEvent:Date;//примечательное событие
  private readonly timeBeforeTheEvent:Date;//оставшееся время до примечательного события
  private timerId: number;
  private newDate:Date;//настоящие дата и время
  private readonly experience:Date;//опыт работы

  constructor(skillsService: SkillsService) {
    this.skillsService=skillsService;
    this.skills=this.skillsService.skills;
    this.aboutMyself=new AboutMyself("Дарт Мол",
      new Date(1993,8,26),
      "+79994416308",
      "kasatkin-11@yandex.ru",
      new Date(2016,4,10)
    );
    this.interestingEvent=new Date(2022,10, 24);
    this.timeBeforeTheEvent=new Date();
    this.newDate=new Date();
    this.experience=new Date();
    this.experience.setFullYear(this.newDate.getFullYear()-this.aboutMyself.getStartOfWorking().getFullYear());
    this.experience.setMonth(this.newDate.getMonth()-this.aboutMyself.getStartOfWorking().getMonth());
  }

  ngOnInit() {
    this.timerId = setInterval(()=>this.setDeltaTime(), 1000);
  }


  setDeltaTime(){
    this.timeBeforeTheEvent.setFullYear(this.interestingEvent.getFullYear()-new Date().getFullYear());
    this.timeBeforeTheEvent.setMonth(this.interestingEvent.getMonth()-new Date().getMonth());
    this.timeBeforeTheEvent.setDate(this.interestingEvent.getDate()-new Date().getDate());
    this.timeBeforeTheEvent.setHours(this.interestingEvent.getHours()-new Date().getHours());
    this.timeBeforeTheEvent.setMinutes(this.interestingEvent.getMinutes()-new Date().getMinutes());
    this.timeBeforeTheEvent.setSeconds(this.interestingEvent.getSeconds()-new Date().getSeconds());
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

  getTimeBeforeTheEvent(): Date {
    return this.timeBeforeTheEvent;
  }


  getAboutMyself(): AboutMyself {
    return this.aboutMyself;
  }


  getExperience(): Date {
    return this.experience;
  }


  getSkills(): any[] {
    return this.skills;
  }
}
