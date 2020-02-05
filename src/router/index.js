import Vue from "vue";
import VueRouter from "vue-router";
import LoginContainer from "../components/LoginContainer";
import ContractsContainer from "../components/ContractsContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginContainer
  },
  {
    path: "/contracts",
    name: "contracts",
    component: ContractsContainer,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
