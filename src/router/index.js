import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Contracts from "../views/Contracts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/contracts",
    name: "contracts",
    component: Contracts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
