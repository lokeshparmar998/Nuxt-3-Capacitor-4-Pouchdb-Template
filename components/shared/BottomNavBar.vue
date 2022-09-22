<template>
  <nav class="bottom-navbar card">
    <div class="div-center segment">
      <SharedBottomNavIcon :segment="energy" />
    </div>
    <div class="div-center segment">
      <SharedBottomNavIcon :segment="maintenance" />
    </div>
    <div class="div-center segment">
      <SharedBottomNavIcon :segment="tickets" />
    </div>
    <div class="div-center segment">
      <SharedBottomNavIcon :segment="notifications" />
    </div>
    <div class="div-center segment">
      <SharedBottomNavIcon :segment="settings" />
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  props: {
    activeSegment: String,
  },
  setup(props) {
    interface SegmentDetail {
      icon: string;
      segment: string;
      text: string;
      route: string;
    }

    let energy = ref<SegmentDetail>({
      icon: "energy_inactive",
      segment: "Energy",
      text: "has-text-grey-dark",
      route: "/clientId/energy/dashboard",
    });
    let maintenance = ref<SegmentDetail>({
      icon: "pm_inactive",
      segment: "Maintenance",
      text: "has-text-grey-dark",
      route: "/clientId/maintenance/dashboard",
    });
    let tickets = ref<SegmentDetail>({
      icon: "ticket_inactive",
      segment: "Tickets",
      text: "has-text-grey-dark",
      route: "/clientId/ticketing-admin/dashboard",
    });
    let notifications = ref<SegmentDetail>({
      icon: "bell_inactive",
      segment: "Notifications",
      text: "has-text-grey-dark",
      route: "/clientId/notifications/dashboard",
    });
    let settings = ref<SegmentDetail>({
      icon: "settings_inactive",
      segment: "Settings",
      text: "has-text-grey-dark",
      route: "/clientId/settings/dashboard",
    });
    watch(
      () => props.activeSegment,
      (newSegment, oldSegment) => {
        if (newSegment === "Energy") {
          energy.value = {
            icon: "energy_active",
            segment: "Energy",
            text: "has-text-primary",
            route: "/clientId/energy/dashboard",
          };
          maintenance.value = {
            icon: "pm_inactive",
            segment: "Maintenance",
            text: "has-text-grey-dark",
            route: "/clientId/maintenance/dashboard",
          };
          tickets.value = {
            icon: "ticket_inactive",
            segment: "Tickets",
            text: "has-text-grey-dark",
            route: "/clientId/ticketing-admin/dashboard",
          };
          notifications.value = {
            icon: "bell_inactive",
            segment: "Notifications",
            text: "has-text-grey-dark",
            route: "/clientId/notifications/dashboard",
          };
          settings.value = {
            icon: "settings_inactive",
            segment: "Settings",
            text: "has-text-grey-dark",
            route: "/clientId/settings/dashboard",
          };
          return;
        } else if (newSegment === "Maintenance") {
          maintenance.value = {
            icon: "pm_active",
            segment: "Maintenance",
            text: "has-text-primary",
            route: "/clientId/maintenance/dashboard",
          };
          energy.value = {
            icon: "energy_inactive",
            segment: "Energy",
            text: "has-text-grey-dark",
            route: "/clientId/energy/dashboard",
          };
          tickets.value = {
            icon: "ticket_inactive",
            segment: "Tickets",
            text: "has-text-grey-dark",
            route: "/clientId/ticketing-admin/dashboard",
          };
          notifications.value = {
            icon: "bell_inactive",
            segment: "Notifications",
            text: "has-text-grey-dark",
            route: "/clientId/notifications/dashboard",
          };
          settings.value = {
            icon: "settings_inactive",
            segment: "Settings",
            text: "has-text-grey-dark",
            route: "/clientId/settings/dashboard",
          };
          return;
        } else if (newSegment === "Notifications") {
          notifications.value = {
            icon: "bell_active",
            segment: "Notifications",
            text: "has-text-primary",
            route: "/clientId/notifications/dashboard",
          };
          maintenance.value = {
            icon: "pm_inactive",
            segment: "Maintenance",
            text: "has-text-grey-dark",
            route: "/clientId/maintenance/dashboard",
          };
          tickets.value = {
            icon: "ticket_inactive",
            segment: "Tickets",
            text: "has-text-grey-dark",
            route: "/clientId/ticketing-admin/dashboard",
          };
          energy.value = {
            icon: "energy_inactive",
            segment: "Energy",
            text: "has-text-grey-dark",
            route: "/clientId/energy/dashboard",
          };
          settings.value = {
            icon: "settings_inactive",
            segment: "Settings",
            text: "has-text-grey-dark",
            route: "/clientId/settings/dashboard",
          };
          return;
        } else if (newSegment === "Tickets") {
          tickets.value = {
            icon: "ticket_active",
            segment: "Tickets",
            text: "has-text-primary",
            route: "/clientId/ticketing-admin/dashboard",
          };
          energy.value = {
            icon: "energy_inactive",
            segment: "Energy",
            text: "has-text-grey-dark",
            route: "/clientId/energy/dashboard",
          };
          settings.value = {
            icon: "settings_inactive",
            segment: "Settings",
            text: "has-text-grey-dark",
            route: "/clientId/settings/dashboard",
          };
          notifications.value = {
            icon: "bell_inactive",
            segment: "Notifications",
            text: "has-text-grey-dark",
            route: "/clientId/notifications/dashboard",
          };
          maintenance.value = {
            icon: "pm_inactive",
            segment: "Maintenance",
            text: "has-text-grey-dark",
            route: "/clientId/maintenance/dashboard",
          };
          return;
        } else if (newSegment === "Settings") {
          settings.value = {
            icon: "settings_active",
            segment: "Settings",
            text: "has-text-primary",
            route: "/clientId/settings/dashboard",
          };
          energy.value = {
            icon: "energy_inactive",
            segment: "Energy",
            text: "has-text-grey-dark",
            route: "/clientId/energy/dashboard",
          };
          tickets.value = {
            icon: "ticket_inactive",
            segment: "Tickets",
            text: "has-text-grey-dark",
            route: "/clientId/ticketing-admin/dashboard",
          };
          notifications.value = {
            icon: "bell_inactive",
            segment: "Notifications",
            text: "has-text-grey-dark",
            route: "/clientId/notifications/dashboard",
          };
          maintenance.value = {
            icon: "pm_inactive",
            segment: "Maintenance",
            text: "has-text-grey-dark",
            route: "/clientId/maintenance/dashboard",
          };
          return;
        }
      }
    );

    return { energy, maintenance, tickets, notifications, settings };
  },
};
</script>
<style lang="scss" scoped>
.bottom-navbar {
  max-width: 500px;
  height: clamp(60 * 0.75px, 16.667vw, 60 * 1.5px);
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: space-between;
}
.segment {
  width: 20%;
  height: clamp(60 * 0.75px, 16.667vw, 60 * 1.5px);
}
</style>
