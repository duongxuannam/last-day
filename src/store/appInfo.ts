import {action, computed, makeAutoObservable, observable} from 'mobx';
import {KEYS_OFFLINE_STORE, saveOfflineStore} from 'utils/offlineStore';
import {ITheme} from 'utils/themes';

interface IData {
  language?: string;
  theme?: ITheme;
  isLoading?: boolean;
  isLoadedFonts?: boolean;
}

class AppInfo {
  data: IData = {
    language: '',
    theme: '',
    isLoading: true,
    isLoadedFonts: false,
  };

  constructor() {
    makeAutoObservable(this, {
      data: observable,
      getLanguage: computed,
      setLanguage: action,
      setAppInfo: action,
    });
  }

  get getLanguage() {
    return this.data.language;
  }

  setLanguage(languageParam: string) {
    this.data.language = languageParam;
  }

  setAppInfo(params: IData) {
    this.data = {
      ...this.data,
      ...params,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {isLoading, ...rest} = this.data;
    saveOfflineStore(KEYS_OFFLINE_STORE.APP_INFO, rest);
  }
}

export interface AppInfoType extends AppInfo {}

export const appInfo = new AppInfo();
