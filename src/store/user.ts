import { KEYS_OFFLINE_STORE, saveOfflineStore } from 'src/utils/offlineStore';
import { create } from 'zustand';

interface IData {
    isLogin: boolean;
    username: string;
    email: string;
}

interface IActions {
    setUserData: (param: IData) => void;
    logOut: () => void;
}

interface IUser {
    data: IData;
    actions: IActions;
}

const initData = {
    isLogin: false,
    username: '',
    email: '',
};

export const useUserStore = create<IUser>(set => ({
    data: initData,
    actions: {
        setUserData: (data: IData) => {
            saveOfflineStore(KEYS_OFFLINE_STORE.USER_INFO, data);
            return set({
                data,
            });
        },
        logOut: () => {
            saveOfflineStore(KEYS_OFFLINE_STORE.USER_INFO, initData);
            set({
                data: initData,
            });
        },
    },
}));

export const useUserStoreActions = () => useUserStore(state => state.actions);
