import { create } from 'zustand';

export const languagesStore = create((set) => ({
  lang: 'de',
  setLang: (newLang) => set({ lang: newLang }),
}));
