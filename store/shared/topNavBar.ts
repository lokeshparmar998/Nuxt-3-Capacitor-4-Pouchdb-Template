import { defineStore } from "pinia";

interface TopNavBar {
  navBarName: string;
  showBackButton: boolean;
  showCalendar: boolean;
}
export const useTopNavBarState = defineStore("TopNavBar", {
  state: (): TopNavBar => ({
    navBarName: "App Name",
    showBackButton: true,
    showCalendar: false,
  }),
  getters: {
    getTopNavBarConfigurations(state): TopNavBar {
      return {
        navBarName: state.navBarName,
        showBackButton: state.showBackButton,
        showCalendar: state.showCalendar,
      };
    },
  },
  actions: {
    setNavName(name): void {
      this.navBarName = name;
    },
    setBackButton(showButton): void {
      this.showBackButton = showButton;
    },
  },
});
