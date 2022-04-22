import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useRedux, useSearch} from '../../../hooks';
import {styles} from './styles';
const Header = () => {
  const [, setSearchedValue] = useRedux('searchedValue');
  const [search, setSearch] = useSearch(3000);
  useEffect(() => {
    setSearchedValue(search);
  }, [search]);
  return (
    <View style={styles.header}>
      <Searchbar
        style={{width: '100%'}}
        icon="magnify"
        placeholder="Search..."
        onChangeText={setSearch}
      />
    </View>
  );
};
export default Header;
