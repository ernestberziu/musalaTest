import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useRedux} from '../../../hooks';
import {ArticleCard} from '../../components';
import {styles} from './styles';
const NewsList = () => {
  const [newsList, setNewsList] = useState({});
  const [theme] = useRedux('theme');
  const [language] = useRedux('language');
  const [searchedValue] = useRedux('searchedValue', 'latest');
  const [loading, setLoading] = useRedux('loading');
  const {newsPage} = styles(theme);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchedValue}&from=2022-03-22&language=${language}&sortBy=publishedAt&apiKey=2ce283498f0b4af689d563fa3d901230`,
      )
      .then(res => {
        setNewsList(res);
      });
  }, [searchedValue]);
  useEffect(() => {
    loading &&
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${searchedValue}&from=2022-03-22&language=${language}&sortBy=publishedAt&apiKey=2ce283498f0b4af689d563fa3d901230`,
        )
        .then(res => {
          setNewsList(res);
          setLoading(false);
        });
  }, [loading]);
  return (
    <View style={newsPage}>
      {newsList?.data?.articles.filter(Boolean).map((e, i) => (
        <ArticleCard key={i} {...{...e}} theme={theme} />
      ))}
    </View>
  );
};
export default NewsList;
