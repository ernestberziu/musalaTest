import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Switch} from 'react-native-paper';
import {useRedux} from '../../../hooks';
import {styles} from './styles';
import {labels} from '../../labels';
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
  const [selected, setSelected] = useState(language);
  return (
    <View style={settingsPage}>
      <Text style={headerText}>{labels[language]?.Preferences}</Text>
      <View style={elementContainer}>
        <Text style={elementContainerText}>
          {labels[language]?.Theme}:{' '}
          {`${
            theme !== 'light' ? labels[language]?.Dark : labels[language]?.Light
          }`}
        </Text>
        <Switch
          color="black"
          value={theme !== 'light'}
          onValueChange={e => setTheme(e ? 'dark' : 'light')}
        />
      </View>
      <View style={elementContainer}>
        <Text style={elementContainerText}>
          {labels[language]?.ChooseLanguage}
        </Text>
        <RNPickerSelect
          value={selected}
          style={picker}
          onDonePress={() => setLanguage(selected)}
          onValueChange={setSelected}
          items={[
            {label: labels[language]?.England, value: 'en'},
            {label: labels[language]?.Italy, value: 'it'},
          ]}
        />
      </View>
    </View>
  );
};
export default Settings;
