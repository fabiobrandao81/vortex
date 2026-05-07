import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';
import LogScreen from '../screens/LogScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import StormFormScreen from '../screens/StormFormScreen';
import type {RootStackParamList} from './types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="StormForm" component={StormFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}