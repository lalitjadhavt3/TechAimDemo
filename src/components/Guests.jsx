import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from '../utils/secureAxios';
import api from '../utils/secureAxios';
import {isSslPinningAvailable} from 'react-native-ssl-public-key-pinning';

const Guests = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await api
      .get('/sampleGet.php')
      .then(response => {
        console.log('== ~ fetchData ~ response:', response);
      })
      .catch(error => {
        console.log('Error', 'Failed to fetch data due to', error);
      });
  };

  const renderUserItem = ({item}) => (
    <TouchableOpacity style={styles.userCard} key={item}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text
          style={
            styles.userName
          }>{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guests</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#888',
  },
});

export default Guests;
