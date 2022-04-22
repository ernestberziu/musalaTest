import {StyleSheet} from 'react-native';
import {themes} from '../themes';
export const styles = theme =>
  StyleSheet.create({
    tabBarStyle: {
      height: 60,
      marginBottom: -35,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: themes[theme]?.primaryColor,
    },
    tabBarItemStyle: {
      color: 'white',
      margin: 5,
      borderRadius: 10,
    },
    tabBarLabelStyle: {
      fontWeight: '700',
      fontSize: 16,
    },
    tabBarIconStyle: {display: 'none'},
  });
