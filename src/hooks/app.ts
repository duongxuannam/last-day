// import {useAppInfo} from 'contexts/store';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppInfoStore, useAppInfoStoreActions } from 'src/store/appInfo';
import { useUserStoreActions } from 'src/store/user';
import { getOfflineStore, KEYS_OFFLINE_STORE } from 'utils/offlineStore';
import { getThemeColor } from 'utils/themes';

export const useInitApp = () => {
    useInitFont();
    const language = useAppInfoStore(state => state.data.language);
    const { setAppInfoData, setIsAppReady, setIsLoading } =
        useAppInfoStoreActions();
    const { setUserData } = useUserStoreActions();
    const {
        i18n: { changeLanguage },
    } = useTranslation();

    useEffect(() => {
        const appInfoOfflineStore = getOfflineStore(
            KEYS_OFFLINE_STORE.APP_INFO,
        );
        const userOfflineStore = getOfflineStore(KEYS_OFFLINE_STORE.USER_INFO);
        if (userOfflineStore) {
            setUserData(userOfflineStore);
        }
        if (appInfoOfflineStore) {
            setAppInfoData({ ...appInfoOfflineStore });
            setIsAppReady(true);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [setAppInfoData, setIsAppReady, setIsLoading, setUserData]);

    useEffect(() => {
        if (language) {
            changeLanguage(language);
        }
    }, [changeLanguage, language]);
};

export const useInitFont = () => {
    const { setIsLoadedFonts } = useAppInfoStoreActions();
    const [isLoadedFont] = useFonts({
        'BentonSans-Black': require('../../assets/fonts/BentonSans-Black.otf'),
        'BentonSans-Bold': require('../../assets/fonts/BentonSans-Bold.otf'),
        'BentonSans-Book': require('../../assets/fonts/BentonSans-Book.otf'),
        'BentonSans-Medium': require('../../assets/fonts/BentonSans-Medium.otf'),
    });
    useEffect(() => {
        if (isLoadedFont) {
            setIsLoadedFonts(true);
        }
    }, [isLoadedFont, setIsLoadedFonts]);
};

export const useTheme = () => {
    const theme = useAppInfoStore(state => state.data.theme);
    const isDark = theme && ['dark', 'forest'].includes(theme);
    return {
        isDark,
        color: getThemeColor(theme),
    };
};
