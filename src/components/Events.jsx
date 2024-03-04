import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Events = ({event}) => {
  return (
    <View style={styles.eventTile}>
      <Text style={styles.eventBooking}>Next Booking</Text>
      <Text style={styles.eventName}>{event?.name}</Text>
      <Text style={styles.eventDesc}>{event?.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  eventTile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventBooking: {
    fontSize: 19,
    color: 'red',
    marginVertical: 5,
  },
  eventName: {
    fontSize: 17,
    color: 'grey',
    marginVertical: 5,
  },
  eventDesc: {
    fontSize: 14,
    color: 'grey',
  },
});
export default Events;
