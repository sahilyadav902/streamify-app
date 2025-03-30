import { create } from 'zustand';
import recentStreams from '@/data/recentStreams';

export interface StreamData {
  song: string;
  artist: string;
  date: string;
  streams: number;
  userId: string;
  revenueSource: string;
}

interface SortConfig {
  key: keyof StreamData | '';
  direction: 'asc' | 'desc' | '';
}

interface StreamStore {
  data: StreamData[];
  sortConfig: SortConfig;
  searchQuery: string;
  clickedSource: string | null;

  setSearchQuery: (query: string) => void;
  setClickedSource: (source: string | null) => void;
  sortTable: (key: keyof StreamData) => void;
}

export const useStreamStore = create<StreamStore>((set, get) => ({
  data: [...recentStreams].sort((a, b) => b.streams - a.streams),
  sortConfig: { key: 'streams', direction: 'desc' },
  searchQuery: '',
  clickedSource: null,

  setSearchQuery: (query) => {
    set({
      searchQuery: query,
      clickedSource: query ? null : get().clickedSource,
    });
  },

  setClickedSource: (source) => {
    set({
      clickedSource: source,
      searchQuery: source ? '' : get().searchQuery,
    });
  },

  sortTable: (key) => {
    const { data, sortConfig } = get();
    let direction: 'asc' | 'desc' = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    set({ data: sortedData, sortConfig: { key, direction } });
  },
}));
