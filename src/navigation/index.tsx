import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import DemoSettingScreen from 'screens/DemoSetting';
import DemoTabScreen from 'screens/DemoTabScreen';
import HomeScreen from 'screens/Home';
import PuzzleGameScreen from 'screens/PuzzleGame';
import {navigationRef, useBackButtonHandler} from './utils';

// export type DemoTabParamList = {
//   DemoCommunity: undefined
//   DemoShowroom: { queryIndex?: string; itemIndex?: string }
//   DemoDebug: undefined
//   DemoPodcastList: undefined
// }

export type AppStackParamList = {
  Home: undefined;
  DemoTab: undefined;
  DemoSetting: undefined;
  PuzzleGame: undefined;

  // Detail: {id: string};
  // Tab: NavigatorScreenParams<TabParamList>
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const exitRoutes = ['Home'];

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

const AppRoot = () => {
  useBackButtonHandler(routeName => exitRoutes.includes(routeName));
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={'Home'}
            component={HomeScreen}
          /> */}
          <Stack.Screen
            options={{
              headerShown: false,
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppRoot;
