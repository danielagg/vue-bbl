<template>
  <div class="container">
    <BounceLoader color="#fff" />
    <h1>Hang on a sec, {{userName}}</h1>
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
    var(--primary-color) 0%,
    rgb(46, 43, 112) 100%
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