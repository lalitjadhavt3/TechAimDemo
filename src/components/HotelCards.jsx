import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome, {RegularIcons, SolidIcons} from 'react-native-fontawesome';
import hotelListStyles from '../styles/HotelListStyles';
import Swiper from 'react-native-swiper';
import DiscountBox from './DiscountBox';
const HotelCards = ({hotels}) => {
  return (
    <View>
      <View key={hotels.id} style={hotelListStyles.hotelCard}>
        <Swiper
          style={hotelListStyles.swiper}
          showsPagination={true}
          paginationStyle={{bottom: 10}}>
          {hotels?.images.map((image, index) => (
            <View key={index} style={hotelListStyles.slide}>
              <Image
                source={image}
                style={hotelListStyles.image}
                resizeMode="cover"
              />
              <View style={hotelListStyles.hotelSlider}>
                <Text style={hotelListStyles.hotelSliderCounter}>
                  {index + 1 + '/5'}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
        <View style={hotelListStyles.hotelInfo}>
          {hotels.isPromoted && <Text style={{color: 'black'}}>Promoted</Text>}
          <View style={hotelListStyles.hotelNameRow}>
            <Text style={hotelListStyles.hotelName}>{hotels.name}</Text>
            <View style={hotelListStyles.buttonsContainer}>
              <TouchableOpacity
                style={hotelListStyles.button}
                onPress={() => {
                  // Handle share button press
                }}>
                <FontAwesome
                  icon={SolidIcons.shareAlt}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={hotelListStyles.button}
                onPress={() => {
                  // Handle add to wishlist button press
                }}>
                <FontAwesome icon={SolidIcons.heart} size={30} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Text style={hotelListStyles.hotelRating}>
              {Array.from({length: hotels.ratingInStars}, (v, i) => (
                <FontAwesome
                  key={i}
                  icon={SolidIcons.star}
                  size={20}
                  color="#FFD700"
                />
              ))}
            </Text>
            <Text style={hotelListStyles.hotelSectionSubText}>
              <FontAwesome icon={SolidIcons.mapMarker} size={20} color="red" />
              {' ' + hotels.city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              marginVertical: 5,
            }}>
            <Text style={hotelListStyles.hotelRating}>
              {hotels.rating + ' '}
              {hotels.rating > 8 && hotels.rating
                ? 'Excellent'
                : hotels.rating > 5 && hotels.rating < 8
                ? 'Good'
                : hotels.rating > 1 && hotels.rating < 5
                ? 'Average'
                : 'Not Recommended'}
            </Text>
            <Text style={hotelListStyles.hotelSectionSubText}>
              {' ' + hotels.totalReviews} Reviews
            </Text>
          </View>

          {hotels.rating > 8 && (
            <Text
              style={{
                padding: 2,
                textAlign: 'center',
                borderRadius: 2,
                backgroundColor: '#e5ebfe',
                color: '#4281cd',
                fontSize: 12,
                width: '20%',
              }}>
              Top Value
            </Text>
          )}

          <DiscountBox hotel={hotels} />
        </View>
      </View>
    </View>
  );
};

export default HotelCards;
