import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ArticleCard = ({title = '', urlToImage: uri = ''}, key) => {
  return (
    <TouchableOpacity key={key}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.mainImage}
          source={{
            uri,
          }}
        />
        <Text style={styles.headlight}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ArticleCard;
