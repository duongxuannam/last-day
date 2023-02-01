import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const KEYS_OFFLINE_STORE = {
  APP_INFO: 'APP_INFO',
  USER_INFO: 'USER_INFO',
};

export const saveOfflineStore = (key: string, data: object) => {
  storage.set(key, JSON.stringify(data));
};

export const getOfflineStore = (key: string) => {
  const jsonData = storage.getString(key);
  return jsonData ? JSON.parse(jsonData) : '';
};

export const deleteOfflineStore = (key: string) => {
  storage.delete(key);
};

export const deleteAllOfflineStore = () => {
  storage.clearAll();
};
