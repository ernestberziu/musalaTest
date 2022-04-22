import React from 'react';
import {ScrollView} from 'react-native';
import {Header} from '../components';
import NewsList from './NewsList/NewsList';

const Page = ({children}) => children;
Page.NewsList = () => (
  <Page>
    <Header />
    <ScrollView style={{flex: 1}}>
      <NewsList />
    </ScrollView>
  </Page>
);
Page.Settings = () => (
  <Page>
    <ScrollView style={{flex: 1}}>
      <NewsList />
    </ScrollView>
  </Page>
);
export default Page;
