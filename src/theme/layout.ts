import {StyleSheet} from 'react-native';

export const spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
};

export const layout = StyleSheet.create({
  // Screens
  screen: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  screenCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },

  // Cards
  card: {
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  // Rows
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Divider
  divider: {
    height: 1,
    marginVertical: spacing.sm,
  },
});