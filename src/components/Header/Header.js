import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useRedux, useSearch} from '../../../hooks';
import {themes} from '../../themes';
import {styles} from './styles';
const Header = () => {
  const [, setSearchedValue] = useRedux('searchedValue');
  const [search, setSearch] = useSearch(3000);
  const [theme] = useRedux('theme');
  console.log(theme);
  const {header, search: searchConainer, searchInput} = styles(theme);
  useEffect(() => {
    setSearchedValue(search);
  }, [search]);
  return (
    <View style={header}>
      <Searchbar
        style={searchConainer}
        inputStyle={searchInput}
        placeholderTextColor={themes[theme]?.textColor}
        iconColor={themes[theme]?.textColor}
        icon="magnify"
        placeholder="Search..."
        onChangeText={setSearch}
      />
    </View>
  );
};
export default Header;
