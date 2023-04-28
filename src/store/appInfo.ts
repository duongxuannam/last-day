import { create } from 'zustand';
import { ITheme } from 'utils/themes';
import { KEYS_OFFLINE_STORE, saveOfflineStore } from 'src/utils/offlineStore';

interface IData {
    language?: string;
    theme?: ITheme;
    isOnboard?: boolean;
}

interface IActions {
    setAppInfoData: (param: IData) => void;
    setIsLoadedFonts: (param: boolean) => void;
    setIsLoading: (param: boolean) => void;
    setIsAppReady: (param: boolean) => void;
}

interface IAppInfo {
    data: IData;
    isLoading?: boolean;
    isLoadedFonts?: boolean;
    isAppReady?: boolean;
    actions: IActions;
}

export const useAppInfoStore = create<IAppInfo>(set => ({
    data: {
        language: '',
        theme: '',
        isOnboard: false,
    },
    isLoading: true,
    isLoadedFonts: false,
    isAppReady: false,
    actions: {
        setLanguage: (languageParam: string) =>
            set(state => ({
                data: {
                    ...state.data,
                    language: languageParam,
                },
            })),
        setAppInfoData: (data: IData) =>
            set(state => {
                const rs = {
                    ...state.data,
                    ...data,
                };
                saveOfflineStore(KEYS_OFFLINE_STORE.APP_INFO, rs);
                return {
                    data: rs,
                };
            }),
        setIsLoadedFonts: (isLoadedFonts: boolean) =>
            set(() => ({
                isLoadedFonts,
            })),
        setIsLoading: (isLoading: boolean) =>
            set(() => ({
                isLoading,
            })),
        setIsAppReady: (isAppReady: boolean) =>
            set(() => ({
                isAppReady,
            })),
    },
}));

export const useAppInfoStoreActions = () =>
    useAppInfoStore(state => state.actions);
