import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Contracts from "../views/Contracts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Landing
  },
  {
    path: "/contracts",
    name: "contracts",
    component: Contracts,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
