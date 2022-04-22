import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const ArticleCard = ({title = '', urlToImage = '', theme}) => {
  const {cardContainer, mainImage, headlight} = styles(theme);
  return (
    <TouchableOpacity>
      <View style={cardContainer}>
        <Image
          style={mainImage}
          source={{
            uri: urlToImage,
          }}
        />
        <Text style={headlight}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ArticleCard;
