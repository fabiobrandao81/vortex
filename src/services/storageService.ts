import AsyncStorage from '@react-native-async-storage/async-storage';
import {StormEntry, StormEntryDraft} from '../types';

const STORM_ENTRIES_KEY = 'vortex:storm_entries';

export async function saveStormEntry(draft: StormEntryDraft): Promise<StormEntry> {
  const entry: StormEntry = {
    ...draft,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  const existing = await loadStormEntries();
  const updated = [entry, ...existing];
  await AsyncStorage.setItem(STORM_ENTRIES_KEY, JSON.stringify(updated));
  return entry;
}

export async function loadStormEntries(): Promise<StormEntry[]> {
  const raw = await AsyncStorage.getItem(STORM_ENTRIES_KEY);
  if (!raw) return [];
  return JSON.parse(raw) as StormEntry[];
}

export async function deleteStormEntry(id: string): Promise<void> {
  const existing = await loadStormEntries();
  const updated = existing.filter(e => e.id !== id);
  await AsyncStorage.setItem(STORM_ENTRIES_KEY, JSON.stringify(updated));
}