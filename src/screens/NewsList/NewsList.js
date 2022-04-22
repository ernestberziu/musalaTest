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
  const {newsPage} = styles(theme);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchedValue}&from=2022-03-21&sortBy=publishedAt&apiKey=fd7bcfdaec9940239926a0c89a25388b`,
      )
      .then(setNewsList);
  }, [searchedValue]);
  return (
    <View style={newsPage}>{newsList?.data?.articles?.map(ArticleCard)}</View>
  );
};
export default NewsList;
