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
import {NavigationStack} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
