<template>
  <div class="container">
    <h1>Contracts</h1>
    <ul>
      <li v-for="(contract, index) in contracts" :key="index">
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
  padding: 1rem 1rem 1rem 3.5rem;
  cursor: pointer;
  transition: background 100ms linear;
}

li:hover {
  background: white;
}

li:not(:first-child) {
  margin-top: 0.5rem;
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
</style>