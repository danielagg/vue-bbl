<template>
  <div class="container">
    <section>
      <h1>Contract Manager</h1>
      <p>Please enter your credentials.</p>

      <form>
        <input type="text" name="email" placeholder="Email address..." />
        <input type="password" name="password" placeholder="Password..." />
        <input type="submit" value="Login" @click="onSubmit" />
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    onSubmit: async function(e) {
      e.preventDefault();
      const result = await axios.post("/api/login", {
        email: "asdsad"
      });
      alert(result);
    }
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  background: white;
  border-radius: 10px;
  width: 30%;
  min-height: 35vh;
  padding: 3rem;
  text-align: center;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
}

form {
  margin-top: 1rem;
}

input {
  display: block;
  width: 80%;
  margin: 2rem auto 0 auto;
  border: none;
  padding: 1rem 1.5rem;
  outline: none;
  border-bottom: 3px solid var(--primary-color);
}

input:focus {
  background: #eeeeee;
}

input[type="submit"] {
  border: none;
  margin-top: 2rem;
  border-radius: 600px;
  max-width: 50%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
}
</style>
