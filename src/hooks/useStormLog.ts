import {useState, useEffect, useCallback} from 'react';
import {StormEntry} from '../types';
import {loadStormEntries, deleteStormEntry} from '../services';

type StormLogState = {
  entries: StormEntry[];
  loading: boolean;
  error: string | null;
};

export function useStormLog() {
  const [state, setState] = useState<StormLogState>({
    entries: [],
    loading: true,
    error: null,
  });

  const load = useCallback(async () => {
    setState(prev => ({...prev, loading: true, error: null}));
    try {
      const entries = await loadStormEntries();
      setState({entries, loading: false, error: null});
    } catch {
      setState({entries: [], loading: false, error: 'Failed to load storm log.'});
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    try {
      await deleteStormEntry(id);
      await load();
    } catch {
      setState(prev => ({...prev, error: 'Failed to delete entry.'}));
    }
  }, [load]);

  useEffect(() => {
    load();
  }, [load]);

  return {...state, refresh: load, remove};
}