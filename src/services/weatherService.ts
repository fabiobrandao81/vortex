import {CurrentWeather} from '../types';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const WEATHER_CODE_MAP: [number, string][] = [
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

export function mapWeatherCode(code: number): string {
  const match = WEATHER_CODE_MAP.find(([max]) => code <= max);
  return match ? match[1] : 'Unknown';
}

export async function fetchWeather(
  latitude: number,
  longitude: number,
): Promise<CurrentWeather> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: [
      'temperature_2m',
      'windspeed_10m',
      'winddirection_10m',
      'precipitation',
      'weathercode',
      'is_day',
    ].join(','),
    wind_speed_unit: 'ms',
    timezone: 'auto',
  });

  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  const json = await response.json();
  const c = json.current;

  return {
    temperature: c.temperature_2m,
    windSpeed: c.windspeed_10m,
    windDirection: c.winddirection_10m,
    precipitation: c.precipitation,
    weatherCode: c.weathercode,
    isDay: c.is_day === 1,
  };
}