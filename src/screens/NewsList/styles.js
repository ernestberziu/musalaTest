import {StyleSheet, Dimensions} from 'react-native';
import {themes} from '../../themes';
const windowHeight = Dimensions.get('window').height;
export const styles = theme =>
  StyleSheet.create({
    newsPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: themes[theme]?.secondaryColor,
      height: windowHeight,
    },
  });
