import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useRedux, useSearch} from '../../../hooks';
import {themes} from '../../themes';
import {styles} from './styles';
import {labels} from '../../labels';
const Header = () => {
  const [, setSearchedValue] = useRedux('searchedValue', '');
  const [search, setSearch] = useSearch(2000);
  const [theme] = useRedux('theme');
  const [language] = useRedux('language', 'en');
  const {header, search: searchContainer, searchInput} = styles(theme);
  useEffect(() => {
    setSearchedValue(search);
  }, [search]);
  return (
    <View style={header}>
      <Searchbar
        style={searchContainer}
        inputStyle={searchInput}
        placeholderTextColor={themes[theme]?.textColor}
        iconColor={themes[theme]?.textColor}
        icon="magnify"
        placeholder={labels[language].Search}
        onChangeText={setSearch}
      />
    </View>
  );
};
export default Header;
