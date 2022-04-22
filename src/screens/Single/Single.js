import React from 'react';
import {View, Text, Image} from 'react-native';
import {useRedux} from '../../../hooks';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import {labels} from '../../labels';
const Single = () => {
  const navigate = useNavigation();
  const {
    urlToImage: uri,
    title,
    author,
    content,
    publishedAt,
  } = useRoute().params.single;
  const [theme] = useRedux('theme');
  const [language] = useRedux('language');
  const {
    singlePage,
    headerContainer,
    buttonStyle,
    buttonText,
    imageContainer,
    detailsContainer,
    titleStyle,
    authorStyle,
    contentContainer,
    contentText,
  } = styles(theme);
  return (
    <View style={singlePage}>
      <View style={headerContainer}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={buttonStyle}>
            <Text style={buttonText}>{labels[language]?.GoBack}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={imageContainer}>
        <Image
          style={imageContainer}
          source={{
            uri,
          }}
        />
      </View>
      <View>
        <Text style={titleStyle}>{title}</Text>
      </View>
      <View style={detailsContainer}>
        <Text style={authorStyle}>
          {labels[language]?.Author} {author}
        </Text>
        <Text style={authorStyle}>
          {labels[language]?.PublishedAt}
          {moment(publishedAt).format('DD/MM/YYYY')}
        </Text>
      </View>
      <View style={contentContainer}>
        <Text style={contentText}>{content}</Text>
      </View>
    </View>
  );
};
export default Single;
