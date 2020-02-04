<template>
  <ContractsContainer :userName="userName" />
</template>

<script>
import ContractsContainer from "../components/ContractsContainer";
export default {
  props: {
    userName: {
      type: String,
      default: "Guest"
    }
  },
  components: {
    ContractsContainer
  }
};
</script>
