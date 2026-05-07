import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, typography, layout, spacing} from '../theme';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function LogScreen() {
  const theme = useTheme();
  const navigation = useNavigation<Nav>();

  return (
    <View style={[layout.screen, {backgroundColor: theme.background}]}>
      <Text style={[typography.h2, {color: theme.textPrimary}]}>
        Storm Log
      </Text>
      <TouchableOpacity
        style={{
          marginTop: spacing.lg,
          backgroundColor: theme.primary,
          padding: spacing.md,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Camera')}>
        <Text style={[typography.label, {color: theme.surface}]}>
          + DOCUMENT STORM
        </Text>
      </TouchableOpacity>
    </View>
  );
}
