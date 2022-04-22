import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';
import {useRedux} from '../../hooks';
import {themes} from '../themes';

const tabs = ['Home', 'Settings'];

export const NavigationStack = () => {
  const Tab = createBottomTabNavigator();
  const [theme] = useRedux('theme');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 40,
          backgroundColor: themes[theme]?.primaryColor,
        },
        tabBarItemStyle: {
          color: 'white',
          margin: 5,
          borderRadius: 10,
        },
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      {tabs.map((name, key) => (
        <Tab.Screen {...{name, iconName: 'home', key, component: Tabs[name]}} />
      ))}
    </Tab.Navigator>
  );
};
