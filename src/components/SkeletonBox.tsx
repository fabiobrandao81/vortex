import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from '../theme';

type Props = {
  width?: number | string;
  height: number;
  borderRadius?: number;
  style?: ViewStyle;
};

export default function SkeletonBox({
  width = '100%',
  height,
  borderRadius = 6,
  style,
}: Props) {
  const {theme} = useTheme();
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.box,
        {
          width,
          height,
          borderRadius,
          backgroundColor: theme.border,
          opacity,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    overflow: 'hidden',
  },
});