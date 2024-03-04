import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome, {RegularIcons, SolidIcons} from 'react-native-fontawesome';
import hotels from '../db/hotelsData';

const renderHotelsItems = ({item}) => (
  <TouchableOpacity style={styles.userCard}>
    <Image source={item.images[0]} style={styles.avatar} />
    <View style={styles.iconsContainer}>
      {/* Your three icons go here */}
      <FontAwesome
        icon={SolidIcons.shareAlt}
        style={{backgroundColor: 'rgba(0,0,0,0.1)', height: 30}}
        size={30}
        color="white"
      />
      <FontAwesome
        icon={SolidIcons.heart}
        style={{backgroundColor: 'rgba(0,0,0,0.1)', height: 30}}
        size={30}
        color="white"
      />
      <FontAwesome
        icon={SolidIcons.vectorSquare}
        style={{backgroundColor: 'rgba(0,0,0,0.1)', height: 30}}
        size={30}
        color="white"
      />
    </View>
    <View style={styles.userInfo}>
      <Text style={styles.hotelName}>{`${item.name}`}</Text>
      <Text style={styles.hotelRating}>
        <FontAwesome icon={SolidIcons.star} size={25} color="red" />
        {`${item.rating}`}
      </Text>
    </View>
  </TouchableOpacity>
);

const HotelsListHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id.toString()}
        renderItem={renderHotelsItems}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  userCard: {
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius: 5,
  },
  iconsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
    color: 'white', // Set the color you want
  },
  userInfo: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009975',
  },
  hotelRating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default HotelsListHistory;
