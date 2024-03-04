import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const FilterDropdowns = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const filters = ['Filter1', 'Filter2', 'Filter3'];
  const prices = ['Price1', 'Price2', 'Price3'];
  const sorts = ['Sort1', 'Sort2', 'Sort3'];

  return (
    <View style={styles.filtersRow}>
      <SelectDropdown
        data={filters}
        defaultButtonText="Filter  V"
        onSelect={(selectedItem, index) => setSelectedFilter(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        style={styles.filterDropdown}
        buttonStyle={styles.filterDropdown}
        buttonTextStyle={styles.filterDropdown}
      />

      <SelectDropdown
        data={prices}
        defaultButtonText="Price  V"
        onSelect={(selectedItem, index) => setSelectedPrice(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        style={styles.filterDropdown}
        buttonStyle={styles.filterDropdown}
        buttonTextStyle={styles.filterDropdown}
      />

      <SelectDropdown
        data={sorts}
        defaultButtonText="Sort  V"
        onSelect={(selectedItem, index) => setSelectedSort(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        style={styles.filterDropdown}
        buttonStyle={styles.filterDropdown}
        buttonTextStyle={styles.filterDropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 2,
    width: '100%',
    elevation: 2, // Add elevation for a shadow effect
  },
  filterDropdown: {
    fontSize: 14,
    backgroundColor: 'white',
  },
});

export default FilterDropdowns;
