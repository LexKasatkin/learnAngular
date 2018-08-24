import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SkillComponent} from "./skill/skill.component";
import {HttpModule} from "@angular/http";
import { AboutMyselfComponent } from './about-myself/about-myself.component';
import { TimerComponent } from './timer/timer.component';
import { TabComponent } from './tab/tab.component';
import {FormsModule} from "@angular/forms";
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    AboutMyselfComponent,
    TimerComponent,
    TabComponent,
    ContactsComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
