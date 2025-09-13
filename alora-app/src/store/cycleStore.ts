import { create } from 'zustand';

type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

interface CycleState {
  currentPhase: CyclePhase;
  cycleStartDate: string | null;
  cycleLength: number;
  periodLength: number;
  setCurrentPhase: (phase: CyclePhase) => void;
  setCycleStartDate: (date: string) => void;
  setCycleLength: (length: number) => void;
  setPeriodLength: (length: number) => void;
}

export const useCycleStore = create<CycleState>((set) => ({
  currentPhase: 'follicular',
  cycleStartDate: null,
  cycleLength: 28,
  periodLength: 5,
  setCurrentPhase: (phase) => set({ currentPhase: phase }),
  setCycleStartDate: (date) => set({ cycleStartDate: date }),
  setCycleLength: (length) => set({ cycleLength: length }),
  setPeriodLength: (length) => set({ periodLength: length }),
}));