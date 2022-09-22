<template>
  <div class="nav-option" @click="router.push(segment.route)">
    <span class="bottom-nav-icon">
      <img :src="icon" :alt="segment.segment" />
    </span>
    <span class="navbar-name" :class="segment.text">{{ segment.segment }}</span>
  </div>
</template>
<script>
export default {
  props: {
    segment: Object,
  },
  setup(props) {
    const router = useRouter();
    const icon = ref();
    const getServiceIcon = async (icon) => {
      return new URL(
        `../../assets/pages/bottom-nav/${icon}.png`,
        import.meta.url
      ).href;
    };
    watchEffect(
      async () => (icon.value = await getServiceIcon(props.segment.icon))
    );
    return { router, icon };
  },
};
</script>
<style lang="scss" scoped>
.nav-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-nav-icon {
  width: clamp(24 * 0.75px, 6.667vw, 24 * 1.5px);
  height: clamp(24 * 0.75px, 6.667vw, 24 * 1.5px);
}
.navbar-name {
  font-size: clamp(11 * 0.75px, 3.056vw, 11 * 1.5px);
  padding-top: 4px;
}
</style>
