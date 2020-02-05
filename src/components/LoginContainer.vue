<template>
  <div class="container">
    <section>
      <h1>Contract Manager</h1>
      <p>Please enter your credentials.</p>

      <input type="text" name="email" placeholder="Email address..." v-model="email" />
      <input type="password" name="password" placeholder="Password..." v-model="password" />
      <button type="submit" class="button button-one" @click="onSubmit">Login</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function(e) {
      e.preventDefault();

      // put logged in user into global state
      const result = await axios
        .post("http://localhost:8888/api/login", {
          email: this.email
        })
        .catch(() => {
          alert("Something went wrong");
        });

      this.$router.push({
        name: "contracts",
        params: {
          userName: result.data.firstName
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  background: var(--primary-color);
  background: linear-gradient(
    153deg,
    #5F6CDF 0%,
    #660FA0 100%
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

.button {
  border: none;
  font-size: 1.1rem;
  margin-top: 3rem;
  border-radius: 600px;
  padding: 1.2rem;
  min-width: 50%;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.button:focus {
  outline: none;
}

.button::after {
  content: "";
  position: absolute;
  border-radius: 600px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color-light);
  z-index: -1;
  transition: transform 100ms ease-out;
  transform: scaleY(0);
}

.button:hover::after {
  transform: scaleY(1);
}
</style>
