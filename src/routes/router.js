import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store";

import home from "../pages/HomePage.vue";
import login from "../pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/home",
      name: "home",
      meta: { requiresAuth: true },
      component: home,
    },
  ],
});


// Gurada de rota, impede de acessar rotas sem estar logado
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.logged) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
