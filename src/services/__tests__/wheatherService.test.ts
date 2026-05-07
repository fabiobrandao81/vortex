import {mapWeatherCode} from '../weatherService';

describe('mapWeatherCode', () => {
  const cases: [number, string][] = [
    [0,  'Clear sky'],
    [1,  'Mainly clear'],
    [2,  'Partly cloudy'],
    [3,  'Overcast'],
    [4,  'Smoke'],
    [8,  'Dust'],
    [9,  'Duststorm'],
    [10, 'Mist'],
    [11, 'Patches'],
    [12, 'Fog'],
    [13, 'Lightning visible'],
    [16, 'Preciptation'],
    [17, 'Thunderstorm'],
    [18, 'Squals'],
    [19, 'Funnel cloud'],
    [20, 'Drizzle'],
    [21, 'Rain'],
    [22, 'Snow'],
    [23, 'Rain and snow'],
    [24, 'Freezing rain'],
    [25, 'Rain showers'],
    [26, 'Snow showers'],
    [27, 'Hail'],
    [28, 'Fog'],
    [29, 'Thunderstorm'],
    [35, 'Duststorm/Sandstorm'],
    [39, 'Blowing Snow'],
    [49, 'Fog'],
    [59, 'Drizzle'],
    [65, 'Rain'],
    [69, 'Freezing Rain'],
    [78, 'Snow'],
    [79, 'Ice Pellets'],
    [82, 'Rain showers'],
    [84, 'Wintry mix'],
    [86, 'Snow showers'],
    [88, 'Small hail showers'],
    [90, 'Hail showers'],
    [94, 'Thunderstorm in the last hour'],
    [99, 'Thunderstorm'],
  ];
  it.each(cases)('code %i returns "%s"', (code, expected) => {
    expect(mapWeatherCode(code)).toBe(expected);
  });
});