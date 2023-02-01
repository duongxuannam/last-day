import {useAppInfo} from 'contexts/store';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {getOfflineStore, KEYS_OFFLINE_STORE} from 'utils/offlineStore';
import {getThemeColor} from 'utils/themes';

export const useInitApp = () => {
  useInitFont();
  const appInfo = useAppInfo();
  const {
    i18n: {changeLanguage},
  } = useTranslation();

  const {
    data: {language},
  } = appInfo;

  useEffect(() => {
    const appInfoOfflineStore = getOfflineStore(KEYS_OFFLINE_STORE.APP_INFO);
    if (appInfoOfflineStore) {
      appInfo.setAppInfo({...appInfoOfflineStore, isLoading: false});
    } else {
      appInfo.setAppInfo({isLoading: false});
    }
  }, [appInfo]);

  useEffect(() => {
    if (language) {
      changeLanguage(language);
    }
  }, [changeLanguage, language]);
};

export const useInitFont = () => {
  const appInfo = useAppInfo();

  const [isLoadedFont] = useFonts({
    'BentonSans-Black': require('../../assets/fonts/BentonSans-Black.otf'),
    'BentonSans-Bold': require('../../assets/fonts/BentonSans-Bold.otf'),
    'BentonSans-Book': require('../../assets/fonts/BentonSans-Book.otf'),
    'BentonSans-Medium': require('../../assets/fonts/BentonSans-Medium.otf'),
  });
  useEffect(() => {
    if (isLoadedFont) {
      appInfo.setAppInfo({isLoadedFonts: true});
    }
  }, [isLoadedFont, appInfo]);
};

export const useTheme = () => {
  const appInfo = useAppInfo();
  const isDark =
    appInfo.data.theme && ['dark', 'forest'].includes(appInfo.data.theme);
  return {
    isDark,
    color: getThemeColor(appInfo.data.theme),
  };
};
