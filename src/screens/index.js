import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';

const Tab = createBottomTabNavigator();
const tabs = ['Home', 'Settings'];

export const NavigationStack = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    {tabs.map((name, key) => (
      <Tab.Screen {...{name, key, component: Tabs[name]}} />
    ))}
  </Tab.Navigator>
);
