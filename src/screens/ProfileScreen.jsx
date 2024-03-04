import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import profileScreenStyles from '../styles/ProfileScreenStyle';
import NetInfo from '@react-native-community/netinfo';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import eventDates from '../db/events';
import CalendarComponent from '../components/CalendarComponent';
import Events from '../components/Events';
import Guests from '../components/Guests';
import SuggestionsWebView from '../components/SuggestionsWebView';
import HotelsListHistory from '../components/HotelsListHistory';

function AccordionItem({children, title, bgColor}) {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View style={profileScreenStyles.accordBody}>{children}</View>;

  return (
    <View style={profileScreenStyles.accordContainer}>
      <TouchableOpacity
        style={[profileScreenStyles.accordHeader, {backgroundColor: bgColor}]}
        onPress={toggleItem}>
        <Text style={profileScreenStyles.accordTitle}>{title}</Text>
        <FontAwesome
          icon={SolidIcons.chevronCircleDown}
          size={25}
          color="white"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

const ProfileScreen = () => {
  const handleMonthChange = newMonth => {
    setCurrentMonth(newMonth);
  };

  const handleDatePress = date => {
    setCurrentDay(date);
  };

  const [currentMonth, setCurrentMonth] = useState('2024-05-01');
  const [currentDay, setCurrentDay] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={profileScreenStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={profileScreenStyles.container}>
        <View style={profileScreenStyles.profileSummary}>
          <Image
            source={require('./../assets/profileScreenImage.jpg')}
            style={profileScreenStyles.profileImage}
          />
          <Text style={profileScreenStyles.profileTitle}>Zara Briner</Text>
          <Text style={profileScreenStyles.profileSubTitle}>
            Johannesburg, South America
          </Text>
        </View>

        <ImageBackground
          source={require('./../assets/bgProfileScreenText.jpg')}
          style={profileScreenStyles.backgroundImage}>
          <View style={profileScreenStyles.insightContainer}>
            <View style={profileScreenStyles.insightText}>
              <Text style={profileScreenStyles.insightBoldText}>121</Text>
              <Text style={profileScreenStyles.insightSmallText}>
                Coming Soon
              </Text>
            </View>
            <View style={profileScreenStyles.insightTextWithBorder}></View>
            <View style={profileScreenStyles.insightText}>
              <Text style={profileScreenStyles.insightBoldText}>3</Text>
              <Text style={profileScreenStyles.insightSmallText}>Tabs</Text>
            </View>
          </View>
        </ImageBackground>

        <AccordionItem title="Bookings" bgColor="#006069">
          <CalendarComponent
            key={currentMonth}
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            eventDates={eventDates}
            onDayPress={handleDatePress}
          />
          <Events event={currentDay} />
        </AccordionItem>

        <AccordionItem title="Reviews" bgColor="#009975">
          <Text>There are no items to display as of now!</Text>
        </AccordionItem>

        <AccordionItem title="History" bgColor="#e41445">
          <HotelsListHistory />
        </AccordionItem>

        <AccordionItem title="Your Details" bgColor="#5a4941">
          {isConnected && <Guests />}
        </AccordionItem>

        <AccordionItem title="Wish List" bgColor="#736356">
          <Text>There are no items to display as of now!</Text>
        </AccordionItem>

        <AccordionItem title="Suggestions" bgColor="#998675">
          {isConnected && <SuggestionsWebView />}
        </AccordionItem>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
