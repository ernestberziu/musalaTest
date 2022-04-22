import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';
import {useRedux} from '../../hooks';
import {styles} from './style';
const tabs = [
  {en: 'Home', it: 'Casa'},
  {en: 'Settings', it: 'Impostazioni'},
];
const Tab = createBottomTabNavigator();

export const NavigationStack = () => {
  const [theme] = useRedux('theme');
  const [language] = useRedux('language', 'en');
  const {tabBarStyle, tabBarItemStyle, tabBarLabelStyle, tabBarIconStyle} =
    styles(theme);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarItemStyle,
        tabBarLabelStyle,
        tabBarIconStyle,
      }}>
      {tabs.map((name, key) => (
        <Tab.Screen
          {...{
            name: name[language],
            iconName: 'home',
            key,
            component: Tabs[name.en],
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
