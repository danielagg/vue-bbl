<template>
  <div class="container">
    <h1>Contracts</h1>
    <ul>
      <li
        v-for="(contract, index) in contracts"
        :key="index"
        :class="[(selectedContract === contract) ? activeClass : '']"
        @click="onClick(contract)"
      >
        <span class="contract-id">{{ contract.id }}</span>
        <p class="supplied-by">
          Supplied by
          <span class="supplier">{{contract.supplier}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contracts: {
      type: Array,
      required: true
    },
    selectedContract: {
      type: Object,
      required: true
    },
    setSelectedContract: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      activeClass: "activeClass"
    };
  },
  methods: {
    onClick: function(contract) {
      this.setSelectedContract(contract);
    }
  }
};
</script>

<style scoped>
.container {
  background: #ececec;
  overflow: scroll;
  overflow-x: hidden;
  max-height: calc(100vh - 55px);
}

h1 {
  font-size: 2.6rem;
  padding: 2rem;
  color: #5e5e5e;
  font-weight: 400;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  padding: 1.2rem 1rem 1.2rem 3.5rem;
  cursor: pointer;
  opacity: 0.75;
}

li:hover {
  background: white;
}

.contract-id {
  font-size: 1.5rem;
}

.supplied-by {
  margin: 0.1rem 0 0 0;
  padding: 0;
}

.supplier {
  color: var(--primary-color);
  font-weight: 700;
}

.activeClass {
  background: white;
  border-left: 12px solid var(--primary-color);
  padding-left: calc(3.5rem - 12px);
  opacity: 1;
}
</style>