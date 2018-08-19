import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
@Injectable()
export class SkillsService{
  skills=[
    {name:"GIT"},
    {name:"Android SDK"},
    {name:"Java"},
    {name:"XML"},
    {name:"JSON"},
    {name:"SQLite"},
    {name:"REST"},
  ]
}

