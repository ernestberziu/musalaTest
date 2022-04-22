import {StyleSheet, Dimensions} from 'react-native';
import {themes} from '../../themes';
const width = Dimensions.get('window').width;
export const styles = theme => {
  return StyleSheet.create({
    cardContainer: {
      width: width,
      position: 'relative',
      paddingHorizontal: 0,
    },
    headlight: {
      position: 'absolute',
      bottom: 20,
      textAlign: 'center',
      color: themes[theme]?.textColor,
      display: 'flex',
      flexWrap: 'wrap',
      width: width,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '600',

      backgroundColor: themes[theme]?.primaryColor,
    },
    mainImage: {width: width, height: 300},
  });
};
