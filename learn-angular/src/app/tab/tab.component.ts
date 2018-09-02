import {Component, Input, OnInit} from '@angular/core';
import {TabsService} from "./tabs.service";
import {Tab} from "./tab";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers:[TabsService]
})
export class TabComponent implements OnInit {
  private readonly tabsService: TabsService;
  tabs=[];
   selectTab: Tab;
  constructor() {
    this.tabsService=new TabsService();
    this.tabs=this.tabsService.getTabs();
  }

  ngOnInit() {
  }

  setSelectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.setActive(true);
    this.selectTab=tab;
  }
}
