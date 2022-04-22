import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useRedux} from '../../../hooks';
import {ArticleCard} from '../../components';
import {styles} from './styles';
const NewsList = () => {
  const [newsList, setNewsList] = useState({});
  const [theme] = useRedux('theme');
  const [searchedValue] = useRedux('searchedValue', 'latest');
  const [loading, setLoading] = useRedux('loading');
  const {newsPage} = styles(theme);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchedValue}&from=2022-03-22&language=it&sortBy=publishedAt&apiKey=ee5a141a6917434cb121cfa4cdaf3bd1`,
      )
      .then(res => {
        setNewsList(res);
      });
  }, [searchedValue]);
  useEffect(() => {
    loading &&
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${searchedValue}&from=2022-03-22&sortBy=publishedAt&apiKey=ee5a141a6917434cb121cfa4cdaf3bd1`,
        )
        .then(res => {
          setNewsList(res);
          setLoading(false);
        });
  }, [loading]);
  return (
    <View style={newsPage}>
      {newsList?.data?.articles
        .filter(Boolean)
        .map(({title, urlToImage}, i) => (
          <ArticleCard
            key={i}
            theme={theme}
            title={title}
            urlToImage={urlToImage}
          />
        ))}
    </View>
  );
};
export default NewsList;
