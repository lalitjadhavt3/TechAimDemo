import {StyleSheet} from 'react-native';
const profileScreenStyles = StyleSheet.create({
  profileSummary: {
    height: 255,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  insightText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  insightTextWithBorder: {
    width: 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  insightContainer: {
    flex: 1,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Align items at the start and end
    padding: 10,
  },
  insightBoldText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  insightSmallText: {
    fontSize: 16,
    color: 'white',
  },
  profileTitle: {fontSize: 25, color: 'black'},
  profileSubTitle: {fontSize: 14, color: 'grey'},
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  backgroundImage: {
    width: '100%', // Full width
    height: 100, // Set the desired height
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },

  startText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  endText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  accordContainer: {
    paddingBottom: 0,
  },
  accordHeader: {
    padding: 12,
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    marginLeft: '5%',
    fontSize: 15,
    color: 'white',
  },
  accordBody: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  separator: {
    height: 0,
  },
});
export default profileScreenStyles;
