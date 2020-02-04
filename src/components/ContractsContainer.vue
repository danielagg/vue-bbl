<template>
  <div>
    <LoadingContracts v-if="isLoading" :userName="userName" />
    <div v-else>
      <router-link to="/">Home</router-link>|
      <router-link to="/contracts">Contracts</router-link>
      <h1>This is an about page</h1>
      <h1>{{userName}}</h1>
    </div>
  </div>
</template>

<script>
import LoadingContracts from "./LoadingContracts";
export default {
  props: {
    userName: {
      type: String,
      default: "Guest"
    }
  },
  components: {
    LoadingContracts
  },
  data() {
    return {
      isLoading: true
    };
  }
};
</script>

<style scoped>
</style>