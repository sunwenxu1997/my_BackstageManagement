import Vue from "vue";
import VueRouter from "vue-router";
import { Loading } from 'element-ui';
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
    meta: { title: '登录' },
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
    meta: { title: '主页' },
    redirect: "/index",
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: { title: '主页' },
        component: () =>
          import("../views/page/Index.vue"),
      },
      {
        path: 'one',
        name: 'One',
        meta: { title: '选项一' },
        component: () =>
          import("../views/page/One.vue"),
      },
      {
        path: 'two',
        name: 'Two',
        meta: { title: '选项二' },
        component: () =>
          import("../views/page/Two.vue"),
      },
      {
        path: 'three',
        name: 'Three',
        meta: { title: '选项三' },
        component: () =>
          import("../views/page/Three.vue"),
      },
    ]
  },
  {
    path: "/noFound",
    name: "NoFound",
    meta: { title: '404' },
    component: () =>
      import("../views/NoFound.vue")
  }
];
let loading = null;
const vueRouter = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
vueRouter.beforeEach((to, from, next) => {
  loading = Loading.service({
    lock: false,
    background: 'rgba(0, 0, 0, 0.7)'
  });
  next();
});

vueRouter.afterEach((to, from) => {
  loading.close();
})
export default vueRouter;
