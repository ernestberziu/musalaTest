import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Switch} from 'react-native-paper';
import {useRedux} from '../../../hooks';
import {styles} from './styles';
const Settings = () => {
  const [theme, setTheme] = useRedux('theme');
  const {
    settingsPage,
    headerText,
    elementContainer,
    elementContainerText,
    picker,
  } = styles(theme);
  const [language, setLanguage] = useRedux('language', 'en');
  return (
    <View style={settingsPage}>
      <Text style={headerText}>Configure your preferences</Text>
      <View style={elementContainer}>
        <Text style={elementContainerText}>
          Theme: {`${theme !== 'light' ? 'Dark' : 'Light'}`}
        </Text>
        <Switch
          color="black"
          value={theme !== 'light'}
          onValueChange={e => setTheme(e ? 'dark' : 'light')}
        />
      </View>
      <View style={elementContainer}>
        <Text style={elementContainerText}>Choose language</Text>
        <RNPickerSelect
          value={language}
          style={picker}
          onValueChange={setLanguage}
          items={[
            {label: 'English', value: 'en'},
            {label: 'Shqip', value: 'sq'},
          ]}
        />
      </View>
    </View>
  );
};
export default Settings;
