import {Component} from "@angular/core";
import {Skill} from "./skill";
import {LocalStorage} from "../local.storage";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent {
  skills = [
    // {name: "Бой на световых мечах"},
    // {name: "Ярость"},
    // {name: "Великая Сила"},
    // {name: "Мощь"},
    // {name: "Элементы акробатики"}
  ];
  inputSkillName: string;
  inputBoolNewSkill: boolean = false;

  constructor() {
    this.skills = LocalStorage.read("skills");
  }

  addNewSkill() {
    if (this.inputSkillName != null) {
      let skill = new Skill(this.inputSkillName);
      this.skills.push(skill);
      this.inputBoolNewSkill = false;
      this.inputSkillName = "";
      LocalStorage.add("skills",this.skills);
    }
  }

  setNewSkill() {
    this.inputBoolNewSkill = true;
  }
}
