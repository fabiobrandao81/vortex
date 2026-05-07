import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, typography, spacing, layout} from '../theme';

interface Props {
  label: string;
  value: string;
  unit: string;
}

export default function MetricCard({label, value, unit}: Props) {
  const {theme} = useTheme();
  return (
    <View style={[layout.card, {backgroundColor: theme.surface, borderColor: theme.border}]}>
      <Text style={[typography.label, {color: theme.textSecondary}]}>
        {label.toUpperCase()}
      </Text>
      <View style={layout.rowCard}>
        <Text style={[typography.metricSm, {color: theme.textPrimary}]}>
          {value}
        </Text>
        <Text style={[typography.bodySm, {color: theme.textSecondary, marginLeft: spacing.xs}]}>
          {unit}
        </Text>
      </View>
    </View>
  );
}
