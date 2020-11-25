import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../feature/home';
import Choosen from '../../feature/choosen';

const Tab = createBottomTabNavigator();

export default function NavigationRoute() {
  return (
    <NavigationContainer>
      <Tab.Navigator {...tabConfig}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Choosen" component={Choosen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const tabConfig = {
  screenOptions: ({route}: any) => ({
    tabBarIcon: ({focused, color, size}: any) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'ios-images' : 'ios-images-outline';
      } else if (route.name === 'Choosen') {
        iconName = focused ? 'ios-heart' : 'ios-heart-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showLabel: false,
  },
};
