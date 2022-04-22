import {StyleSheet} from 'react-native';
import {themes} from '../../themes';
export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    position: 'relative',
    paddingHorizontal: 0,
    // borderRadius: 5,
  },
  headlight: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: themes.light.textColor,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',

    backgroundColor: themes.light.primaryColor,
  },
  mainImage: {width: '100%', height: 300},
});
