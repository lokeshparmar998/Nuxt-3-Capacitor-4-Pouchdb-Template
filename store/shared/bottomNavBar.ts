import { defineStore } from "pinia";

interface BottomNav {
  activeSegment: string;
  isBottomNavVisible: boolean;
}
export const useBottomNavState = defineStore("bottomNav", {
  state: (): BottomNav => ({
    activeSegment: "Energy",
    isBottomNavVisible: true,
  }),
  getters: {
    showBottomNav(state): boolean {
      return state.isBottomNavVisible;
    },
    showActiveNav(state): string {
      return state.activeSegment;
    },
  },
  actions: {
    setActiveNav(segment): void {
      this.activeSegment = segment;
    },
    setShowNav(isActive): void {
      this.isBottomNavVisible = isActive;
    },
  },
});
