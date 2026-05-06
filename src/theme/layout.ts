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
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: spacing.md,
    margin: spacing.xs,
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
  rowCard: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: spacing.xs,
  },

  // Buttons
    button: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  
  // Divider
  divider: {
    height: 1,
    marginVertical: spacing.sm,
  },
});