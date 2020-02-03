<template>
  <LoginContainer />
  <!-- <BounceLoader /> -->
</template>

<script>
// @ is an alias to /src
// import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import LoginContainer from "../components/LoginContainer";
export default {
  name: "home",
  components: {
    LoginContainer
    // BounceLoader
  }
};
</script>
