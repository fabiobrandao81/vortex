import React from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useTheme, typography, layout} from '../theme';
import {useWeather} from '../hooks/useWeather';
import {mapWeatherCode} from '../services/weatherService';
import MetricCard from '../components/MetricCard';
import NotFoundView from '../components/NotFoundView';
import {styles} from './WeatherScreen.styles';

export default function WeatherScreen() {
  const theme = useTheme();
  const {data, loading, error, refresh} = useWeather();

  if (loading) {
    return (
      <View style={layout.screenCentered}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  if (error || !data) {
    return (
      <NotFoundView
        message={error ?? 'Weather data unavailable.'}
        onRetry={refresh}
      />
    );
  }

  return (
    <ScrollView
      style={[layout.screen, {backgroundColor: theme.background}]}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={refresh}
          tintColor={theme.primary}
        />
      }>
      <Text style={[typography.h2, {color: theme.textPrimary}, styles.screenTitle]}>
        Current Weather
      </Text>
      <Text style={[typography.body, {color: theme.textSecondary}, styles.conditionLabel]}>
        {mapWeatherCode(data.weatherCode)}
      </Text>

      <Text style={[typography.metric, {color: theme.primary}, styles.temperature]}>
        {data.temperature.toFixed(1)}°C
      </Text>

      <View style={styles.metricsRow}>
        <MetricCard
          label="Wind Speed"
          value={data.windSpeed.toFixed(1)}
          unit="m/s"
        />
        <MetricCard
          label="Precipitation"
          value={data.precipitation.toFixed(1)}
          unit="mm"
        />
      </View>
      <View style={styles.metricsRowSecond}>
        <MetricCard
          label="Wind Direction"
          value={data.windDirection.toString()}
          unit="°"
        />
      </View>
    </ScrollView>
  );
}