import {StyleSheet} from 'react-native';
import {spacing} from '../theme';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  metricsRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  metricsRowSecond: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  temperature: {
    marginTop: spacing.xs,
  },
  conditionLabel: {
    marginBottom: spacing.md,
  },
  screenTitle: {
    marginTop: spacing.lg,
  },
});