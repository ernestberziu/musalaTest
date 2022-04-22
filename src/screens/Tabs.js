import React from 'react';
import {ScrollView} from 'react-native';
import NewsList from './NewsList/NewsList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page from './Pages';
import Settings from './Settings/Settings';

const Stack = createNativeStackNavigator();
const pages = ['NewsList', 'Single'];
const Tab = ({children}) => children;

const NavigationStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {pages.map((name, key) => (
      <Stack.Screen {...{name, key, component: Page[name]}} />
    ))}
  </Stack.Navigator>
);
Tab.Home = () => (
  <Tab>
    <NavigationStack />
  </Tab>
);
Tab.Settings = () => (
  <Tab>
    <ScrollView style={{flex: 1}}>
      <Settings />
    </ScrollView>
  </Tab>
);

export default Tab;
