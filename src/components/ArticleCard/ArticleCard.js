import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useRedux} from '../../../hooks';
const ArticleCard = ({title = '', urlToImage: uri = ''}, key) => {
  const [theme] = useRedux('theme');
  const {cardContainer, mainImage, headlight} = styles(theme);
  return (
    <TouchableOpacity key={key}>
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
