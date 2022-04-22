import {StyleSheet} from 'react-native';
import {themes} from '../../themes';
export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: themes.light.secondaryColor,
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
