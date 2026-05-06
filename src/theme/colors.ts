import {useColorScheme} from 'react-native';

const palette = {
  // Brand
  stormBlue: '#1B3A5C',
  alertAmber: '#F5A623',
  dangerRed: '#D0021B',

  // Neutrals
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray500: '#9E9E9E',
  gray800: '#333333',
  black: '#000000',
};

const lightTheme = {
  background: palette.gray100,
  surface: palette.white,
  primary: palette.stormBlue,
  accent: palette.alertAmber,
  danger: palette.dangerRed,
  textPrimary: palette.gray800,
  textSecondary: palette.gray500,
  border: palette.gray200,
};

const darkTheme = {
  background: palette.black,
  surface: palette.gray800,
  primary: palette.alertAmber,
  accent: palette.alertAmber,
  danger: palette.dangerRed,
  textPrimary: palette.white,
  textSecondary: palette.gray500,
  border: palette.gray800,
};

export function useTheme() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}

export type Theme = typeof lightTheme;