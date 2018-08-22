import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SkillComponent} from "./skill/skill.component";
import {HttpModule} from "@angular/http";
import { AboutMyselfComponent } from './about-myself/about-myself.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    AboutMyselfComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
