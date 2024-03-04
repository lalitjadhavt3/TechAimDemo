import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, View, Text } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import HotelListScreen from './src/screens/HotelListScreen';
import HotelListMapScreen from './src/screens/HotelListMapScreen';
import FontAwesome, {BrandIcons, RegularIcons, SolidIcons} from 'react-native-fontawesome';
import HamburgerMenu from './src/components/Icons/HamburgerMenu';
import GoBackIcon from './src/components/Icons/GoBackIcon';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        drawerPosition: 'right',

      }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerStyle: {
              backgroundColor: 'lightgrey', // Customize the background color
            },
            
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <HamburgerMenu/>
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: 'Profile',
            headerStyle: {
              backgroundColor: 'lightgrey', // Customize the background color
            },
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}>
           
            <GoBackIcon/>
          </TouchableOpacity>),
            headerRight: () => (
              <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                <HamburgerMenu/>
              </TouchableOpacity>
            ),
          })}
        />
         <Drawer.Screen
          name="HotelList"
          component={HotelListScreen}
          options={({ navigation }) => ({
            title: 'Hotel List',
            headerStyle: {
              backgroundColor: 'lightgrey', // Customize the background color
            },
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackIcon/>
          </TouchableOpacity>),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <HamburgerMenu/>
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="HotelListMap"
          component={HotelListMapScreen}
          options={({ navigation }) => ({
            title: 'Map',
            headerStyle: {
              backgroundColor: 'lightgrey', // Customize the background color
            },
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackIcon/>
          </TouchableOpacity>),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <HamburgerMenu/>
              </TouchableOpacity>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
