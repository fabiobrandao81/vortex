import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme, typography, layout, spacing} from '../theme';
import {useStormLog} from '../hooks';
import {StormEntry} from '../types';
import {RootStackParamList} from '../navigation/types';
import {styles} from './LogScreen.styles';

type LogScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LogScreen() {
  const theme = useTheme();
  const navigation = useNavigation<LogScreenNavigationProp>();
  const {entries, loading, refresh, remove} = useStormLog();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh]),
  );

  const handleDelete = useCallback((entry: StormEntry) => {
    Alert.alert(
      'Delete entry',
      'Are you sure you want to delete this storm entry?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => remove(entry.id)},
      ],
    );
  }, [remove]);

  const renderEntry = useCallback(({item}: {item: StormEntry}) => (
    <View style={[styles.entryCard, {
      backgroundColor: theme.surface,
      borderColor: theme.border,
    }]}>
      <Image source={{uri: item.photoUri}} style={styles.entryPhoto} />
      <View style={styles.entryContent}>
        <Text style={[typography.h3, {color: theme.textPrimary}]}>
          {item.stormType}
        </Text>
        <Text
          style={[typography.bodySm, {color: theme.textSecondary}]}
          numberOfLines={2}>
          {item.conditions}
        </Text>
        <View style={styles.entryFooter}>
          <Text style={[typography.caption, {color: theme.textSecondary}]}>
            {new Date(item.createdAt).toLocaleDateString()}
          </Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(item)}>
            <Text style={[typography.caption, {color: theme.danger}]}>
              DELETE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ), [theme, handleDelete]);

  return (
    <View style={[layout.screen, {backgroundColor: theme.background}]}>
      <Text style={[typography.h2, {color: theme.textPrimary, marginTop: spacing.lg, marginBottom: spacing.md}]}>
        Storm Log
      </Text>

      <TouchableOpacity
        style={[styles.docButton, {backgroundColor: theme.primary}]}
        onPress={() => navigation.navigate('Camera')}>
        <Text style={[typography.label, {color: theme.surface}]}>
          + DOCUMENT STORM
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={theme.primary}
          style={{marginTop: spacing.xl}}
        />
      ) : entries.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[typography.h3, {color: theme.textSecondary}]}>
            No storms logged yet
          </Text>
          <Text style={[typography.body, {color: theme.textSecondary}]}>
            Document your first storm above.
          </Text>
        </View>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={item => item.id}
          renderItem={renderEntry}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refresh}
              tintColor={theme.primary}
            />
          }
          style={{marginTop: spacing.md}}
        />
      )}
    </View>
  );
}