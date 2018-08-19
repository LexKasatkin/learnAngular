import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SkillComponent} from "./user/skill.component";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
