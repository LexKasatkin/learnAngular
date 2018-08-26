import {Component} from '@angular/core';
import {AboutMyself} from "./about.myself";

@Component({
  selector: 'app-about-myself',
  templateUrl: './about-myself.component.html',
  styleUrls: ['./about-myself.component.css'],
})
export class AboutMyselfComponent {
  private readonly aboutMyself: AboutMyself;//о себе

  constructor() {
    this.aboutMyself = new AboutMyself("Дарт Мол",
      new Date(1993, 8, 26),
    );
  }

  getAboutMyself(): AboutMyself {
    return this.aboutMyself;
  }
}
