import {Tab} from './tab'
export class TabsService{
  private readonly tabs=[
      new Tab("Общие данные"),
    new Tab("Контакты"),
    new Tab("Опыт работы"),
    new Tab("Навыки"),
    new Tab("Мои проекты"),
    new Tab("Образование"),
    new Tab("Знание языков"),
    new Tab("Обо мне")
    ];
  getTabs(){
    return this.tabs;
  }
}
