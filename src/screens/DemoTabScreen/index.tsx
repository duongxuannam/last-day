import React, {useCallback} from 'react';
import Text from 'components/Text';
import View from 'components/View';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InforLogo from './ios-information-circle.svg';
import InforOutlineLogo from './ios-information-circle-outline.svg';
import ListLogo from './ios-list.svg';
import ListOutlineLogo from './ios-list-outline.svg';
import {useTheme} from 'hooks/app';
import {ColorType} from 'constants/colors';

function HomeScreen() {
  return (
    <View flex={1} itemCenter contentCenter>
      <ListLogo width={40} height={40} color="red" fill="tomato" />
      <ListOutlineLogo width={40} height={40} color="red" fill="tomato" />

      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View flex={1} itemCenter contentCenter>
      <InforLogo width={40} height={40} color="red" fill="tomato" />
      <InforOutlineLogo width={40} height={40} color="red" fill="tomato" />
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabBarCustom({colors}: {colors: ColorType}) {
  return <View flex={1} bg={colors.background} />;
}

const DemoTabScreen = () => {
  const {color: colors} = useTheme();
  const tabbar = useCallback(() => <TabBarCustom colors={colors} />, [colors]);
  return (
    <>
      <View flex={1}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarInactiveTintColor: colors.tabBarInactive,
            tabBarActiveTintColor: colors.tabBarActive,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? (
                  <InforLogo width={size} height={size} fill={color} />
                ) : (
                  <InforOutlineLogo width={size} height={size} fill={color} />
                );
              } else if (route.name === 'Settings') {
                iconName = focused ? (
                  <ListLogo width={size} height={size} fill={color} />
                ) : (
                  <ListOutlineLogo width={size} height={size} fill={color} />
                );
              }

              // You can return any component that you like here!
              return iconName;
            },
            tabBarBackground: tabbar,
          })}>
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name="Settings"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </View>
    </>
  );
};

export default DemoTabScreen;
