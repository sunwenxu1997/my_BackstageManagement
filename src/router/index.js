import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "*",
    redirect: '/noFound'
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/center",
    name: "Center",
    component: () =>
      import("../views/Center.vue")
  },
  {
    path: "/noFound",
    name: "NoFound",
    component: () =>
      import("../views/NoFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
