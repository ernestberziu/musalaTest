import {StyleSheet, Dimensions} from 'react-native';
import {themes} from '../../themes';
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  settingsPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: themes.dark.secondaryColor,
    height: windowHeight,
  },
  elementContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: themes.dark.textColor,
  },
  elementContainerText: {
    color: themes.dark.textColor,
  },
});
