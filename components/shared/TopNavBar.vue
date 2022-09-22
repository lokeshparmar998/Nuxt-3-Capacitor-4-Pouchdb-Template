<template>
  <div class="top-nav-bar">
    <div class="operations">
      <span
        class="mdi mdi-keyboard-backspace mdi-24px has-text-white"
        @click="backButton"
      >
      </span>
    </div>
    <div class="nav-name">
      {{ navBarName }}
    </div>
    <div class="operations"></div>
  </div>
</template>
<script>
export default {
  props: {
    showBackButton: Boolean,
    navBarName: String,
  },
  setup() {
    const router = useRouter();
    function backButton() {
      router.go(-1);
    }
    return {
      backButton,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav-bar {
  background-color: $green;
  display: flex;
  max-width: 500px;
  height: 60px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
}
.operations {
  width: 15%;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.nav-name {
  width: 80%;
  height: inherit;
  font-family: "Roboto", sans-serif;
  font-size: clamp(15 * 0.75px, 4.167vw, 15 * 1.5px);
  letter-spacing: 0.01em;
  font-weight: 400;
  color: $white;
  font-weight: normal;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
