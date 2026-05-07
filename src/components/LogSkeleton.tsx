import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonBox from './SkeletonBox';
import {useTheme, spacing} from '../theme';

function SkeletonCard() {
  return (
    <View style={styles.card}>
      <SkeletonBox width={90} height={90} borderRadius={0} />
      <View style={styles.content}>
        <SkeletonBox width={120} height={18} />
        <SkeletonBox width={180} height={14} />
        <SkeletonBox width={80} height={12} />
      </View>
    </View>
  );
}

export default function LogSkeleton() {
  const {theme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: spacing.sm,
    justifyContent: 'space-between',
  },
});