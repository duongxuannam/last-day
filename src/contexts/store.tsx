import React, {createContext, PropsWithChildren, useContext} from 'react';
import {store, Store} from 'store/index';

interface Props extends PropsWithChildren {
  value: Store;
}

const StoreContext = createContext<Store>(store);

const StoreProvider = ({children, value}: Props): JSX.Element => {
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(StoreContext).profile;
};
export const useTime = () => {
  return useContext(StoreContext).time;
};
export const useAppInfo = () => {
  return useContext(StoreContext).appInfo;
};

export default StoreProvider;
