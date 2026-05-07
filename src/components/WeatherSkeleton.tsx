import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonBox from './SkeletonBox';
import {useTheme, spacing} from '../theme';

export default function WeatherSkeleton() {
  const {theme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <SkeletonBox width={160} height={20} style={styles.item} />
      <SkeletonBox width={140} height={64} borderRadius={8} style={styles.item} />
      <View style={styles.row}>
        <SkeletonBox height={88} borderRadius={12} style={styles.flex} />
        <View style={styles.gap} />
        <SkeletonBox height={88} borderRadius={12} style={styles.flex} />
      </View>
      <View style={[styles.row, {marginTop: spacing.xs}]}>
        <SkeletonBox height={88} borderRadius={12} style={styles.flex} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.sm,
  },
  item: {
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  gap: {
    width: spacing.xs,
  },
});