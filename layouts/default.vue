<template>
  <div :class="[bottomNavBar.showBottomNav ? 'active-nav' : '']" class="layout">
    <SharedTopNavBar
      :navBarName="topNavBar.navBarName"
      :showBackButton="topNavBar.showBackButton"
    />
    <slot />
    <SharedBottomNavBar
      v-show="bottomNavBar.showBottomNav"
      :activeSegment="activeSegment"
    />
  </div>
</template>
<script>
import { useTopNavBarState } from "@/store/shared/topNavBar";
import { useBottomNavState } from "@/store/shared/bottomNavBar";
export default {
  setup() {
    definePageMeta({
      /* middleware: ["auth"] */
      // uncomment after adding middleware
    });
    const topNavBar = useTopNavBarState();
    const bottomNavBar = useBottomNavState();
    const activeSegment = ref("Energy");
    const route = useRoute();

    /* watch  route to set active/inactive bottom nave segment */
    watch(
      () => route.path,
      (newRoute, oldRoute) => {
        if (newRoute.includes("energy")) {
          activeSegment.value = "Energy";
        } else if (newRoute.includes("maintenance")) {
          activeSegment.value = "Maintenance";
        } else if (newRoute.includes("notifications")) {
          activeSegment.value = "Notifications";
        } else if (newRoute.includes("ticketing")) {
          activeSegment.value = "Tickets";
        } else if (newRoute.includes("settings")) {
          activeSegment.value = "Settings";
        }
      }
    );
    return { topNavBar, bottomNavBar, activeSegment };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  padding-top: 60px;
  max-width: 500px;
  margin: auto;
}
.active-nav {
  padding-bottom: 60px;
}
</style>
