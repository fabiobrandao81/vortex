import {StyleSheet} from 'react-native';

export const typography = StyleSheet.create({
  // Headings
  h1: {fontSize: 32, fontWeight: '700', lineHeight: 40},
  h2: {fontSize: 24, fontWeight: '600', lineHeight: 32},
  h3: {fontSize: 20, fontWeight: '600', lineHeight: 28},

  // Body
  body:   {fontSize: 16, fontWeight: '400', lineHeight: 24},
  bodySm: {fontSize: 14, fontWeight: '400', lineHeight: 20},

  // UI elements
  label:   {fontSize: 12, fontWeight: '500', lineHeight: 16, letterSpacing: 0.5},
  caption: {fontSize: 11, fontWeight: '400', lineHeight: 16},

  // Metric readouts (storm data numbers)
  metric:   {fontSize: 48, fontWeight: '700', lineHeight: 56},
  metricSm: {fontSize: 28, fontWeight: '600', lineHeight: 36},
});