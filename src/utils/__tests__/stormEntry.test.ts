import {buildStormEntryDraft, validateDraft} from '../stormEntry';

describe('buildStormEntryDraft', () => {
  const base = {
    photoUri: 'file://photo.jpg',
    stormType: 'Tornado' as const,
    conditions: '  High winds  ',
    notes: '  Funnel visible  ',
    latitude: 49.8951,
    longitude: -97.1384,
  };

  it('builds a valid draft with trimmed strings', () => {
    const draft = buildStormEntryDraft(base);
    expect(draft.conditions).toBe('High winds');
    expect(draft.notes).toBe('Funnel visible');
  });

  it('preserves all fields correctly', () => {
    const draft = buildStormEntryDraft(base);
    expect(draft.photoUri).toBe('file://photo.jpg');
    expect(draft.stormType).toBe('Tornado');
    expect(draft.latitude).toBe(49.8951);
    expect(draft.longitude).toBe(-97.1384);
  });
});

describe('validateDraft', () => {
  it('returns error when conditions is empty', () => {
    expect(validateDraft('', 49.8951, -97.1384)).toBe(
      'Please describe the weather conditions.',
    );
  });

  it('returns error when conditions is only whitespace', () => {
    expect(validateDraft('   ', 49.8951, -97.1384)).toBe(
      'Please describe the weather conditions.',
    );
  });

  it('returns error when latitude is null', () => {
    expect(validateDraft('Heavy rain', null, -97.1384)).toBe(
      'Could not get your location.',
    );
  });

  it('returns error when longitude is null', () => {
    expect(validateDraft('Heavy rain', 49.8951, null)).toBe(
      'Could not get your location.',
    );
  });

  it('returns null when all inputs are valid', () => {
    expect(validateDraft('Heavy rain', 49.8951, -97.1384)).toBeNull();
  });
});