import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {useTheme, typography} from '../theme';
import {styles} from './StormFormScreen.styles';
import {StormType, StormEntryDraft} from '../types';
import {RootStackParamList} from '../navigation/types';

const STORM_TYPES: StormType[] = [
  'Supercell',
  'Tornado',
  'Squall Line',
  'Derecho',
  'Hailstorm',
  'Waterspout',
  'Other',
];

type StormFormRouteProp = RouteProp<RootStackParamList, 'StormForm'>;

export default function StormFormScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<StormFormRouteProp>();
  const {photoUri} = route.params;

  const [stormType, setStormType] = useState<StormType>('Other');
  const [conditions, setConditions] = useState('');
  const [notes, setNotes] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [locating, setLocating] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLocating(false);
      },
      () => {
        setLocating(false);
      },
      {enableHighAccuracy: true, timeout: 10000},
    );
  }, []);

  const handleSave = useCallback(() => {
    if (!conditions.trim()) {
      Alert.alert('Missing info', 'Please describe the weather conditions.');
      return;
    }
    if (latitude === null || longitude === null) {
      Alert.alert('Location unavailable', 'Could not get your location.');
      return;
    }

    const draft: StormEntryDraft = {
      photoUri,
      stormType,
      conditions: conditions.trim(),
      notes: notes.trim(),
      latitude,
      longitude,
    };

    // Phase 4 will wire this to storage
    console.log('Storm entry draft:', draft);
    Alert.alert('Saved!', 'Storm entry saved.', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  }, [photoUri, stormType, conditions, notes, latitude, longitude, navigation]);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.background}]}
      contentContainerStyle={styles.scrollContent}>

      <Image source={{uri: photoUri}} style={styles.photo} resizeMode="cover" />

      {/* Storm type */}
      <View style={styles.section}>
        <Text style={[typography.label, styles.label, {color: theme.textSecondary}]}>
          STORM TYPE
        </Text>
        <View style={styles.stormTypeRow}>
          {STORM_TYPES.map(type => {
            const selected = stormType === type;
            return (
              <TouchableOpacity
                key={type}
                style={[
                  styles.stormTypeChip,
                  {
                    backgroundColor: selected ? theme.primary : theme.surface,
                    borderColor: selected ? theme.primary : theme.border,
                  },
                ]}
                onPress={() => setStormType(type)}>
                <Text
                  style={[
                    typography.bodySm,
                    {color: selected ? theme.surface : theme.textPrimary},
                  ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Conditions */}
      <View style={styles.section}>
        <Text style={[typography.label, styles.label, {color: theme.textSecondary}]}>
          CONDITIONS
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.border,
              color: theme.textPrimary,
              backgroundColor: theme.surface,
            },
          ]}
          placeholder="e.g. Heavy rain, 80km/h winds"
          placeholderTextColor={theme.textSecondary}
          value={conditions}
          onChangeText={setConditions}
        />
      </View>

      {/* Notes */}
      <View style={styles.section}>
        <Text style={[typography.label, styles.label, {color: theme.textSecondary}]}>
          NOTES
        </Text>
        <TextInput
          style={[
            styles.input,
            styles.textArea,
            {
              borderColor: theme.border,
              color: theme.textPrimary,
              backgroundColor: theme.surface,
            },
          ]}
          placeholder="Additional observations..."
          placeholderTextColor={theme.textSecondary}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>

      {/* Location */}
      <View style={styles.section}>
        <Text style={[typography.label, styles.label, {color: theme.textSecondary}]}>
          LOCATION
        </Text>
        <View style={styles.coordRow}>
          <View style={[styles.coordBox, {borderColor: theme.border, backgroundColor: theme.surface}]}>
            <Text style={[typography.caption, {color: theme.textSecondary}]}>LAT</Text>
            <Text style={[typography.bodySm, {color: theme.textPrimary}]}>
              {locating ? 'Locating...' : latitude?.toFixed(6) ?? 'Unavailable'}
            </Text>
          </View>
          <View style={[styles.coordBox, {borderColor: theme.border, backgroundColor: theme.surface}]}>
            <Text style={[typography.caption, {color: theme.textSecondary}]}>LON</Text>
            <Text style={[typography.bodySm, {color: theme.textPrimary}]}>
              {locating ? 'Locating...' : longitude?.toFixed(6) ?? 'Unavailable'}
            </Text>
          </View>
        </View>
      </View>

      {/* Date/time — auto-generated on save */}
      <View style={styles.section}>
        <Text style={[typography.label, styles.label, {color: theme.textSecondary}]}>
          DATE & TIME
        </Text>
        <Text style={[typography.body, {color: theme.textPrimary}]}>
          {new Date().toLocaleString()}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.saveButton, {backgroundColor: theme.primary}]}
        onPress={handleSave}>
        <Text style={[typography.label, {color: theme.surface}]}>
          SAVE STORM ENTRY
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
