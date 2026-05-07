import {StyleSheet} from 'react-native';
import {spacing} from '../theme';

export const styles = StyleSheet.create({
  entryCard: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  entryPhoto: {
    width: 90,
    height: 90,
  },
  entryContent: {
    flex: 1,
    padding: spacing.sm,
    justifyContent: 'space-between',
  },
  entryFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    padding: spacing.xs,
  },
  docButton: {
    borderRadius: 8,
    padding: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
});