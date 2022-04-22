import {StyleSheet} from 'react-native';
import {themes} from '../../themes';
export const styles = theme =>
  StyleSheet.create({
    cardContainer: {
      width: '100%',
      position: 'relative',
      paddingHorizontal: 0,
    },
    headlight: {
      position: 'absolute',
      bottom: 20,
      textAlign: 'center',
      color: themes[theme]?.textColor,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '600',

      backgroundColor: themes[theme]?.primaryColor,
    },
    mainImage: {width: '100%', height: 300},
  });
