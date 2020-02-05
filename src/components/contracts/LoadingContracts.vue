<template>
  <div class="container">
    <BounceLoader color="#fff" />
    <h1>Hang on a sec, {{ userName }}.</h1>
    <p>We are fetching contracts.</p>
  </div>
</template>

<script>
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
export default {
  props: {
    userName: {
      type: String,
      default: "Guest"
    }
  },
  components: {
    BounceLoader
  }
};
</script>

<style scoped>
.container {
  background: var(--primary-color);
  background: linear-gradient(
    153deg,
    #5F6CDF 0%,
    #660FA0 100%
  );
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 2rem;
}
p {
  margin: 0;
  padding: 0;
}
</style>
