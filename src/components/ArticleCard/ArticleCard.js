import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
const ArticleCard = e => {
  let {title = '', urlToImage: uri = '', theme} = e;
  const {cardContainer, mainImage, headlight} = styles(theme);
  const navigate = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate.navigate('Single', {single: e})}>
      <View style={cardContainer}>
        <Image
          style={mainImage}
          source={{
            uri,
          }}
        />
        <Text style={headlight}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ArticleCard;
