import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme, typography, layout} from '../theme';
import {styles} from './NotFoundView.styles';

interface Props {
  message: string;
  onRetry: () => void;
}

export default function NotFoundView({message, onRetry}: Props) {
  const {theme} = useTheme();
  return (
    <View style={layout.screenCentered}>
      <Text style={[typography.h3, {color: theme.textPrimary}]}>
        ⚠️ Not Found
      </Text>
      <Text style={[typography.body, {color: theme.textSecondary}, styles.message]}>
        {message}
      </Text>
      <TouchableOpacity
        style={[layout.button, {backgroundColor: theme.primary}]}
        onPress={onRetry}>
        <Text style={[typography.label, {color: theme.surface}]}>
          TRY AGAIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
