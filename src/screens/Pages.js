import React from 'react';
import {ScrollView} from 'react-native';
import {Header} from '../components';
import NewsList from './NewsList/NewsList';
import Settings from './Settings/Settings';

const Page = ({children}) => children;

Page.NewsList = () => (
  <Page>
    <Header />
    <ScrollView style={{flex: 1}}>
      <NewsList />
    </ScrollView>
  </Page>
);
Page.Single = () => (
  <Page>
    <ScrollView style={{flex: 1}}>
      <NewsList />
    </ScrollView>
  </Page>
);

export default Page;
