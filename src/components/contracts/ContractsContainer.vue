<template>
  <div>
    <LoadingContracts v-if="isLoading" :userName="userName" />
    <div v-else>
      <div class="top-bar">
        <h1>Contract Manager</h1>
        <nav>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/contracts">Contracts</router-link>
          </li>
        </nav>
      </div>

      <div class="wrapper">
        <ContractList
          class="contract-list"
          :contracts="contracts"
          :selectedContract="selectedContract"
          :setSelectedContract="setSelectedContract"
        />
        <ContractDetails class="contract-details" />
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
  methods: {
    setSelectedContract: function(contract) {
      this.selectedContract = contract;
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
.top-bar {
  background: var(--primary-color);
  height: 55px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
}

.top-bar h1 {
  font-size: 1rem;
  color: white;
}

li {
  list-style: none;
  margin-right: 2rem;
}

li a {
  color: white;
  text-decoration: none;
}

.wrapper {
  min-height: calc(100vh - 55px);
  display: flex;
}

.contract-list {
  width: 30%;
}

.contract-details {
  width: 70%;
}
</style>