import {StyleSheet, Dimensions} from 'react-native';
import {themes} from '../../themes';
const {width, height} = Dimensions.get('window');
export const styles = theme =>
  StyleSheet.create({
    singlePage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      height,
      backgroundColor: themes[theme]?.primaryColor,
    },
    headerContainer: {
      width,
      height: 50,
      backgroundColor: themes[theme]?.secondaryColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    buttonStyle: {
      display: false,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: themes[theme].buttonPrimaryColor,
    },
    buttonText: {
      color: themes[theme].buttonSecondaryColor,
    },
    imageContainer: {
      height: 500,
      width,
      marginVertical: 10,
    },
    titleStyle: {
      color: themes[theme]?.textColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      width: width,
      fontSize: 20,
      fontWeight: '600',
    },
    detailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      width,
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    authorStyle: {
      color: themes[theme]?.textColor,
      fontSize: 16,
      fontWeight: '400',
    },
    contentContainer: {
      backgroundColor: themes[theme]?.secondaryColor,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width,
      marginVertical: 10,
    },
    contentText: {
      color: themes[theme]?.textColor,
      fontSize: 18,
      fontWeight: '400',
    },
  });
