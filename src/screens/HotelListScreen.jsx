import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import hotelListStyles from '../styles/HotelListStyles';
import Swiper from 'react-native-swiper';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import FilterDropdowns from '../components/filters';
import hotels from '../db/hotelsData';
import DiscountBox from '../components/DiscountBox';
import HotelCards from '../components/HotelCards';
const HotelListScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FilterDropdowns />
      <ScrollView>
        {hotels.map(hotel => (
          <HotelCards hotels={hotel} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HotelListScreen;
