import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';
import LogScreen from '../screens/LogScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import StormFormScreen from '../screens/StormFormScreen';
import {useTheme} from '../theme';
import ThemeToggle from '../components/ThemeToggle';
import type {RootStackParamList} from './types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        // Header styling
        headerStyle: {
          backgroundColor: theme.surface,
        },
        headerTitleStyle: {
          color: theme.textPrimary,
        },
        headerRight: () => <ThemeToggle />,
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        // Tab bar styling
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: theme.background},
        }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerShown: true,
            title: 'Camera',
            headerStyle: {backgroundColor: theme.surface},
            headerTitleStyle: {color: theme.textPrimary},
            headerTintColor: theme.primary,
          }}
        />
        <Stack.Screen
          name="StormForm"
          component={StormFormScreen}
          options={{
            headerShown: true,
            title: 'Document Storm',
            headerStyle: {backgroundColor: theme.surface},
            headerTitleStyle: {color: theme.textPrimary},
            headerTintColor: theme.primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}