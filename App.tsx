import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import 'languages/i18n';
import AppRoot from 'navigation/index';
import ManagerApp from 'manager/ManagerApp';
import ErrorBoundary from 'screens/ErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

function App(): JSX.Element {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <PortalProvider>
                    <AppRoot />
                    <ManagerApp />
                </PortalProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default gestureHandlerRootHOC(App);
