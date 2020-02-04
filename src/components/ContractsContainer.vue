<template>
  <div>
    <LoadingContracts v-if="isLoading" :userName="userName" />
    <div v-else>
      <nav>
        <router-link to="/">Home</router-link>|
        <router-link to="/contracts">Contracts</router-link>
      </nav>
      <div class="wrapper">
        <ContractList />
        <ContractDetails />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingContracts from "./LoadingContracts";
import ContractList from "./ContractList";
import ContractDetails from "./ContractDetails";

export default {
  props: {
    userName: {
      type: String,
      default: "Guest"
    }
  },
  components: {
    LoadingContracts,
    ContractList,
    ContractDetails
  },
  data() {
    return {
      contracts: [],
      selectedContract: null
    };
  },
  computed: {
    isLoading: function() {
      return !this.contracts.length;
    }
  },
  async created() {
    const result = await axios.get("http://localhost:8888/api/contracts");
    this.contracts = result.data;
    this.selectedContract = this.contracts[0];
  }
};
</script>

<style scoped>
</style>