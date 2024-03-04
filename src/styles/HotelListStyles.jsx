import {StyleSheet} from 'react-native';

const hotelListStyles = StyleSheet.create({
  hotelNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 30,
  },
  buttonText: {
    color: '#fff',
  },
  iconStyle: {
    fontSize: 20,
    color: 'yellow',
  },

  hotelCard: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 5,
  },
  swiper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  hotelInfo: {
    padding: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
  },

  hotelSectionSubText: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  hotelDiscountedPrice: {
    fontSize: 16,
    color: '#f72d21',
    marginTop: 5,
  },
  hotelDiscountPercentage: {
    fontSize: 16,
    color: 'green',
  },
  hotelRating: {
    fontSize: 18,
    marginTop: 3,
    color: '#4281cd',
  },
  discountBox: {
    position: 'absolute',
    bottom: '100%',
    right: '2%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
    borderColor: 'grey',
  },
  discountText: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    color: 'white',
    fontSize: 14,
    padding: '2%',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f72d21',
  },
  originalPrice: {
    color: 'grey',
    fontSize: 14,
    paddingHorizontal: '4%',
    textDecorationLine: 'line-through',
    textAlign: 'right',
  },
  discountedPrice: {
    color: '#f72d21',
    fontSize: 20,
    paddingHorizontal: '4%',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  hotelSlider: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  hotelSliderCounter: {
    marginTop: '-8%',
    marginLeft: '10%',
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    width: 50,
    borderRadius: 15,
  },
});

export default hotelListStyles;
