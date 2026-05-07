import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../theme';
import Svg, {Circle, Path, Line} from 'react-native-svg';

function SunIcon({color}: {color: string}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="12"
        r="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <Line x1="12" y1="2" x2="12" y2="4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="12" y1="20" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="2" y1="12" x2="4" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="20" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="4.93" y1="4.93" x2="6.34" y2="6.34" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="17.66" y1="17.66" x2="19.07" y2="19.07" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="4.93" y1="19.07" x2="6.34" y2="17.66" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <Line x1="17.66" y1="6.34" x2="19.07" y2="4.93" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </Svg>
  );
}

function MoonIcon({color}: {color: string}) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default function ThemeToggle() {
  const {theme, toggleTheme} = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={styles.button}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
      {theme.isDark ? (
        <SunIcon color="#F5A623" />
      ) : (
        <MoonIcon color="#333333" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
});