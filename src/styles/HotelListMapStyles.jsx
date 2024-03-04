import {StyleSheet} from 'react-native';
const hotelListMapStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    padding: '2%',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
  },
  countryDropdown: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: 140,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  markerStyle: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    width: 40,
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    color: 'blue',
    backgroundColor: 'white',
  },
  markerCallout: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
  },
  countryLabel: {
    width: '20%',
    color: 'black',
    fontSize: 13,
  },
  countryDropdownContainer: {
    width: '30%',
  },
  countryDropdownText: {
    fontSize: 13,
  },
});
export default hotelListMapStyles;
