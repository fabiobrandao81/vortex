import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, typography, layout} from '../theme';

export default function WeatherScreen() {
    const theme = useTheme();
  return (
    <View style={[layout.screen, {backgroundColor: theme.background}]}>
      <Text style={[typography.h2, {color: theme.textPrimary}]}>Weather</Text>
    </View>
  );
}
