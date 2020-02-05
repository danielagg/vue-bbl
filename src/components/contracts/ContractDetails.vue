<template>
  <div class="container">
    <div>
      <h1 class="contract-id">{{ selectedContract.id }}</h1>
      <p class="supplied-by">
        Supplied by
        <span class="supplier">{{selectedContract.supplier}}</span>
      </p>
      <hr>
    </div>
     <div class="details">
      <div>
        <h2 class="price">{{ selectedContract.price }}</h2>
        <h2 class="currency">{{ selectedContract.currency }}</h2>
        <h2 class="currency">{{ selectedContract.agreementType }} Agreement</h2>
        <h2 class="currency">Purchasing Org:{{ selectedContract.purchaseOrg }}</h2>
        <h2 class="currency">Incoterm:{{ selectedContract.incoterm }}</h2>
      </div>
      <div>
        {{ selectedContract.desc }}
      </div>
    </div>
    
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

hr {
  border: none;
  height: 5px;
  background: #F2F2F2;
  margin-top: 2rem;
}

.details {
  display: flex;
}
</style>