import React, {useEffect, useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import FilterDropdowns from '../components/filters';
import SelectDropdown from 'react-native-select-dropdown';
import hotels from '../db/hotelsData';
import hotelListMapStyles from '../styles/HotelListMapStyles';
import HotelCards from '../components/HotelCards';

const HotelListMapScreen = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const showHotelInfo = hotel => {
    setSelectedHotel(hotel);
  };

  const properties = [
    {
      name: 'Nashik City Region',
      latitude: 19.9975,
      longitude: 73.7898,
    },
  ];

  return (
    <View style={hotelListMapStyles.container}>
      <View style={hotelListMapStyles.countryContainer}>
        <Text style={hotelListMapStyles.countryLabel}>Country:</Text>
        <View style={hotelListMapStyles.countryDropdownContainer}>
          <SelectDropdown
            data={['India', 'Japan']}
            defaultButtonText="Select Country  V"
            buttonStyle={hotelListMapStyles.countryDropdown}
            buttonTextStyle={hotelListMapStyles.countryDropdownText}
          />
        </View>
      </View>
      <FilterDropdowns />
      <MapView
        style={hotelListMapStyles.map}
        initialRegion={{
          latitude: properties[0].latitude,
          longitude: properties[0].longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {hotels.map((hotel, index) => (
          <Marker
            onPress={() => {
              showHotelInfo(hotel);
            }}
            key={hotel.id}
            coordinate={{
              latitude: parseFloat(hotel.GeoLocation.latitude),
              longitude: parseFloat(hotel.GeoLocation.longitude),
            }}>
            <Callout tooltip style={{width: 100}}>
              <TouchableHighlight>
                <View style={hotelListMapStyles.markerCallout}>
                  <Text style={hotelListMapStyles.markerStyle}>
                    ₹ {hotel.discountedPrice}
                  </Text>
                </View>
              </TouchableHighlight>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 400,
          top: '70%',
        }}>
        {selectedHotel && <HotelCards hotels={selectedHotel} />}
      </View>
    </View>
  );
};

export default HotelListMapScreen;
