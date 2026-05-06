import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeatherScreen from '../screens/WeatherScreen';
import LogScreen from '../screens/LogScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Log" component={LogScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}