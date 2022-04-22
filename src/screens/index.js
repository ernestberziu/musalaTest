import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';
import {useRedux} from '../../hooks';
import {themes} from '../themes';

const tabs = [
  {en: 'Home', it: 'Casa'},
  {en: 'Settings', it: 'Impostazioni'},
];
const Tab = createBottomTabNavigator();

export const NavigationStack = () => {
  const [theme] = useRedux('theme');
  const [language] = useRedux('language', 'en');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          marginBottom: -35,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
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
