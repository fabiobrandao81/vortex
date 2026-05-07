import {StyleSheet} from 'react-native';
import {spacing} from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  photo: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  section: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.sm,
    fontSize: 16,
    minHeight: 44,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  stormTypeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  stormTypeChip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    borderWidth: 1,
  },
  coordRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  coordBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.sm,
  },
  saveButton: {
    borderRadius: 8,
    padding: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
});