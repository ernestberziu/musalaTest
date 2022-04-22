/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationStack} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {themes} from './src/themes';
import {useRedux} from './hooks';

const App = () => {
  const [theme] = useRedux('theme', 'light');
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: themes[theme]?.secondaryColor}}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
