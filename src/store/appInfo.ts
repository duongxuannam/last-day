import {action, makeAutoObservable} from 'mobx';

class AppInfo {
  language = 'en';

  constructor() {
    makeAutoObservable(this, {
      setLanguage: action,
    });
  }

  setLanguage(languageParam: string) {
    this.language = languageParam;
  }
}

export interface AppInfoType extends AppInfo {}

export const appInfo = new AppInfo();
