<template>
  <div class="container">
    <h1 class="contract-id">{{ selectedContract.id }}</h1>
    <p class="supplied-by">
      Supplied by
      <span class="supplier">{{selectedContract.supplier}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    selectedContract: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  padding: 3.5rem 5rem;
}

.contract-id {
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: var(--letter-spacing);
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