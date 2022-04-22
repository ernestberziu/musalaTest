import {StyleSheet} from 'react-native';
import {themes} from '../../themes';
export const styles = theme =>
  StyleSheet.create({
    header: {
      width: '100%',
      height: 70,
      backgroundColor: themes[theme]?.secondaryColor,
      display: 'flex',
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    search: {
      backgroundColor: themes[theme]?.primaryColor,
      width: '100%',
    },
    searchInput: {
      color: themes[theme]?.textColor,
    },
  });
