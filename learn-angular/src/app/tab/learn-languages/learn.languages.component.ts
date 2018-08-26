import {Component, OnInit} from '@angular/core';
import {Language} from "./language";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.languages.component.html',
  styleUrls: ['./learn.languages.component.css']
})
export class LearnLanguagesComponent implements OnInit {
  languages = [];

  constructor() {
    this.languages.push(new Language("Забракский", "родной"));
    this.languages.push(new Language("Английский", "читаю профессональную литературу"));
    this.languages.push(new Language("Русский", "нуб"));
  }

  ngOnInit() {
  }

}
