import {Component} from "@angular/core";
import {Skill} from "./skill";
import {LocalStorage} from "../../local.storage";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent {
  skills = [
    {name: "Бой на световых мечах"},
    {name: "Ярость"},
    {name: "Великая Сила"},
    {name: "Мощь"},
    {name: "Элементы акробатики"}
  ];
  inputSkillName: string;
  inputBoolNewSkill: boolean = false;
  private readonly localStorage: LocalStorage;

  constructor() {
      this.localStorage=new LocalStorage("s");
      if(this.localStorage.readWithCheck()==false) {
        this.skills = this.localStorage.read();
      }
      console.log(this.skills);
  }

  addNewSkill() {
    if (this.inputSkillName != null) {
      let skill = new Skill(this.inputSkillName);
      this.skills.push(skill);
      this.inputBoolNewSkill = false;
      this.inputSkillName = "";
      this.localStorage.add(this.skills);
    }
  }

  setNewSkill() {
    this.inputBoolNewSkill = true;
  }
}
