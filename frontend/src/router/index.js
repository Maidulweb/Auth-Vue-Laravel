import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login,
    },
    {
      path: "/auth/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
