/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import Page from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const pages = ['NewsList'];
const NavigationStack = (name, key) => (
  <Stack.Navigator key={key}>
    <Stack.Screen {...{name, component: Page[name]}} />
  </Stack.Navigator>
);
const App: () => Node = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <NavigationContainer>{pages.map(NavigationStack)}</NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
