import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import AuthenticationScreen from 'screens/AuthenticationScreen';
import DemoSettingScreen from 'screens/DemoSetting';
import DemoTabScreen from 'screens/DemoTabScreen';
import HomeScreen from 'screens/Home';
import PuzzleGameScreen from 'screens/PuzzleGame';
import { navigationRef, useBackButtonHandler } from './utils';
import { useAppInfoStore } from 'src/store/appInfo';
import { AppStackParamList } from './types';
import { useUserStore } from 'src/store/user';
import BasketIcon from 'src/components/BasketIcon';

const Stack = createNativeStackNavigator<AppStackParamList>();
const exitRoutes = ['Home'];

export type AppStackScreenProps<T extends keyof AppStackParamList> =
    StackScreenProps<AppStackParamList, T>;

const AppRoot = () => {
    useBackButtonHandler(routeName => exitRoutes.includes(routeName));
    const isLoadedFonts = useAppInfoStore(state => state.isLoadedFonts);
    const isAppReady = useAppInfoStore(state => state.isAppReady);
    const isLogin = useUserStore(state => state.data.isLogin);
    if (!isLoadedFonts || !isAppReady) {
        return null;
    }
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName="Authentication">
                    {!isLogin ? (
                        <Stack.Screen
                            options={{
                                headerShown: false,
                                animation: 'fade_from_bottom',
                            }}
                            name={'Authentication'}
                            component={AuthenticationScreen}
                        />
                    ) : (
                        <>
                            <Stack.Screen
                                options={{
                                    headerShown: true,
                                    animation: 'fade_from_bottom',
                                    headerTitle: 'Products',
                                    headerRight: headerRightProps => (
                                        <BasketIcon
                                            {...headerRightProps}
                                            productCount={1}
                                            onPress={() => {}}
                                        />
                                    ),
                                }}
                                name={'Home'}
                                component={HomeScreen}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: false,
                                }}
                                name={'DemoSetting'}
                                component={DemoSettingScreen}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: false,
                                }}
                                name={'DemoTab'}
                                component={DemoTabScreen}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: false,
                                }}
                                name={'PuzzleGame'}
                                component={PuzzleGameScreen}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppRoot;
