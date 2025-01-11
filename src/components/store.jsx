import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store with persist middleware
export const useCount = create(
  persist(
    (set) => ({
      count: 0,
      wish:0,
      increment: () => set((state) => ({ ...state ,count: state.count + 1 })),
      incrementWish: () => set((state) => ({ ...state ,wish: state.wish + 1 })),
    }),
    {
      name: 'count', // Name of the localStorage key
    }
  )

);