export type RequestWeatherParams = {
  latitude: number;
  longitude: number;
}

export type CurrentWeather = {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  weatherCode: number;
  isDay: boolean;
}

export type WeatherState = {
  data: CurrentWeather | null;
  loading: boolean;
  error: string | null;
}