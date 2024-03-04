import hotelListStyles from '../styles/HotelListStyles';
import {View, Text} from 'react-native';
const DiscountBox = ({hotel}) => {
  return (
    <View style={hotelListStyles.discountBox}>
      <Text style={hotelListStyles.discountText}>
        {hotel.discountPercentage}% OFF Today
      </Text>
      <Text style={hotelListStyles.originalPrice}>
        ₹ {hotel.price.toFixed(2)}
      </Text>
      <Text style={hotelListStyles.discountedPrice}>
        ₹ {hotel.discountedPrice.toFixed(2)}
      </Text>
    </View>
  );
};
export default DiscountBox;
