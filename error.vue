<template>
  <div class="error">
    <div class="error-text">
      <div class="text-big">Oooops!</div>
      <div class="text-small">
        We can't seem to find the page you are looking for.
      </div>
    </div>
    <div class="error-image">
      <img src="~/assets/shared/pageError.svg" />
    </div>
    <div class="button" @click="goto">Back to home</div>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "nonavbar-layout",
  methods: {
    goto() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  padding: 20px;
  flex-direction: column;
  justify-content: center;
}
.error-image {
  margin-bottom: 50px;
}
.error-image img {
  width: 300px;
}
.text-big {
  font-size: 25px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
}
.text-small {
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 50px;
  color: #828282;
}
.button {
  background-color: $green;
  font-size: clamp(14 * 0.75px, 3.889vw, 14 * 1.5px);
  color: $white;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 48px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
