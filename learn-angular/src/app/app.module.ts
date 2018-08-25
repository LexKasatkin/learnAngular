import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from "@angular/common";

import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

import { AppComponent } from './app.component';
import {SkillComponent} from "./skill/skill.component";
import {HttpModule} from "@angular/http";
import { AboutMyselfComponent } from './about-myself/about-myself.component';
import { TimerComponent } from './timer/timer.component';
import { TabComponent } from './tab/tab.component';
import {FormsModule} from "@angular/forms";
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    AboutMyselfComponent,
    TimerComponent,
    TabComponent,
    ContactsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru',
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
