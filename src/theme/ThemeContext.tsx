import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {useColorScheme} from 'react-native';

const palette = {
  stormBlue: '#1B3A5C',
  alertAmber: '#F5A623',
  dangerRed: '#D0021B',
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
  isDark: false,
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
  isDark: true,
};

export type Theme = typeof lightTheme;

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  useEffect(() => {
    setIsDark(systemScheme === 'dark');
  }, [systemScheme]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}