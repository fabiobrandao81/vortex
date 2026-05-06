import {useState, useEffect, useCallback} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {fetchWeather} from '../services/weatherService';
import {WeatherState} from '../types';

export function useWeather() {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    setState(prev => ({...prev, loading: true, error: null}));

    Geolocation.getCurrentPosition(
      async position => {
        try {
          const {latitude, longitude} = position.coords;
          const data = await fetchWeather(latitude, longitude);
          setState({data, loading: false, error: null});
        } catch (e) {
          setState({
            data: null,
            loading: false,
            error: 'Could not fetch weather data. ' + (e instanceof Error ? e.message : ''),
          });
        }
      },
      () => {
        setState({
          data: null,
          loading: false,
          error: 'Could not get device location.',
        });
      },
      {enableHighAccuracy: true, timeout: 10000},
    );
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {...state, refresh: load};
}