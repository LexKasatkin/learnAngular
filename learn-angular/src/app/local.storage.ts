export class LocalStorage{
  static add(skills: string, skills1){
    localStorage.setItem(skills, JSON.stringify(skills1));
  }

  static read(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
