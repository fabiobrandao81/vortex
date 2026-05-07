export type StormType =
  | 'Supercell'
  | 'Tornado'
  | 'Squall Line'
  | 'Derecho'
  | 'Hailstorm'
  | 'Waterspout'
  | 'Other';

export type StormEntry = {
  id: string;
  photoUri: string;
  stormType: StormType;
  conditions: string;
  notes: string;
  latitude: number;
  longitude: number;
  createdAt: string;
};

export type StormEntryDraft = Omit<StormEntry, 'id' | 'createdAt'>;