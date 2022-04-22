import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useRedux} from '../../hooks';
import {Header} from '../components';
import {themes} from '../themes';
import NewsList from './NewsList/NewsList';
import Single from './Single/Single';
const Page = ({children}) => children;

Page.NewsList = e => {
  const [loading, setLoading] = useRedux('loading', false);
  const [theme] = useRedux('theme');
  return (
    <Page>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            style={{backgroundColor: themes[theme]?.secondaryColor}}
            refreshing={loading}
            onRefresh={() => {
              setLoading(true);
            }}
          />
        }
        style={{flex: 1}}>
        <NewsList />
      </ScrollView>
    </Page>
  );
};
Page.Single = () => (
  <Page>
    <ScrollView style={{flex: 1}}>
      <Single />
    </ScrollView>
  </Page>
);

export default Page;
