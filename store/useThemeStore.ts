import { create } from 'zustand';

type ThemeStore = {
  colorScheme: 'light' | 'dark';
  setColorScheme: (theme: 'light' | 'dark') => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  colorScheme: 'light',
  setColorScheme: (theme) => set({ colorScheme: theme }),
}));