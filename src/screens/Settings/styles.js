import {StyleSheet, Dimensions} from 'react-native';
import {themes} from '../../themes';
const windowHeight = Dimensions.get('window').height;
export const styles = theme =>
  StyleSheet.create({
    settingsPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: themes[theme]?.secondaryColor,
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
      color: themes[theme]?.textColor,
    },
    elementContainerText: {
      color: themes[theme]?.textColor,
    },
    picker: {
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 4,
        color: themes[theme]?.textColor,
        borderColor: themes[theme]?.secondaryColor,
      },
    },
  });
