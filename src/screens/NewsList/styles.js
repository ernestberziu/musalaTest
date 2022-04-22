import {StyleSheet} from 'react-native';
import {themes} from '../../themes';
export const styles = theme =>
  StyleSheet.create({
    newsPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      paddingVertical: 20,
      backgroundColor: themes[theme]?.secondaryColor,
    },
  });
