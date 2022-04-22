import React from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {useRedux} from '../../../hooks';
import {styles} from './styles';
const Settings = () => {
  const [theme, setTheme] = useRedux('theme', false);
  return (
    <View style={styles.settingsPage}>
      <Text style={styles.headerText}>Configure your preferences</Text>
      <View style={styles.elementContainer}>
        <Text style={styles.elementContainerText}>
          Theme: {`${theme ? 'Dark' : 'Light'}`}
        </Text>
        <Switch color="black" value={theme} onValueChange={setTheme} />
      </View>
    </View>
  );
};
export default Settings;
