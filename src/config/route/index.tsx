import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../feature/home';
import Liked from '../../feature/liked';
import Detail from '../../feature/detail';

const Stack = createStackNavigator();

const ScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabStack}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator {...tabConfig}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Liked" component={Liked} />
  </Tab.Navigator>
);

export default function NavigationRoute() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
}

const tabConfig = {
  screenOptions: ({route}: any) => ({
    tabBarIcon: ({focused, color, size}: any) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'ios-images' : 'ios-images-outline';
      } else if (route.name === 'Liked') {
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
