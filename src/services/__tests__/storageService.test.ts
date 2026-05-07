import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveStormEntry, loadStormEntries, deleteStormEntry} from '../storageService';
import {StormEntryDraft} from '../../types';

const mockDraft: StormEntryDraft = {
  photoUri: 'file://photo.jpg',
  stormType: 'Tornado',
  conditions: 'Heavy rotation visible',
  notes: 'Funnel touched down briefly',
  latitude: 49.8951,
  longitude: -97.1384,
};

beforeEach(async () => {
  await AsyncStorage.clear();
  jest.clearAllMocks();
});

describe('storageService', () => {
  it('saves and loads a storm entry', async () => {
    await saveStormEntry(mockDraft);
    const entries = await loadStormEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0].stormType).toBe('Tornado');
    expect(entries[0].id).toBeDefined();
    expect(entries[0].createdAt).toBeDefined();
  });

  it('loads empty array when no entries exist', async () => {
    const entries = await loadStormEntries();
    expect(entries).toEqual([]);
  });

  it('deletes an entry by id', async () => {
    const entry = await saveStormEntry(mockDraft);
    await deleteStormEntry(entry.id);
    const entries = await loadStormEntries();
    expect(entries.find(e => e.id === entry.id)).toBeUndefined();
  });

  it('saves multiple entries with most recent first', async () => {
    await saveStormEntry(mockDraft);
    await saveStormEntry({...mockDraft, stormType: 'Hailstorm'});
    const entries = await loadStormEntries();
    expect(entries).toHaveLength(2);
    expect(entries[0].stormType).toBe('Hailstorm');
  });
});