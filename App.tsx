import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';
import 'languages/i18n';
import StoreProvider from 'contexts/store';
import {store} from 'store/index';
import AppRoot from 'navigation/index';
import ManagerApp from 'manager/ManagerApp';
import Loading from 'manager/Loading';

function App(): JSX.Element {
  return (
    <StoreProvider value={store}>
      <PortalProvider>
        <AppRoot />
        <ManagerApp />
        <Loading />
      </PortalProvider>
    </StoreProvider>
  );
}

export default gestureHandlerRootHOC(App);
