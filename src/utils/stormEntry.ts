import {StormEntryDraft, StormType} from '../types';

export type BuildDraftParams = {
  photoUri: string;
  stormType: StormType;
  conditions: string;
  notes: string;
  latitude: number;
  longitude: number;
};

export function buildStormEntryDraft(params: BuildDraftParams): StormEntryDraft {
  return {
    photoUri: params.photoUri,
    stormType: params.stormType,
    conditions: params.conditions.trim(),
    notes: params.notes.trim(),
    latitude: params.latitude,
    longitude: params.longitude,
  };
}

export function validateDraft(
  conditions: string,
  latitude: number | null,
  longitude: number | null,
): string | null {
  if (!conditions.trim()) {
    return 'Please describe the weather conditions.';
  }
  if (latitude === null || longitude === null) {
    return 'Could not get your location.';
  }
  return null;
}