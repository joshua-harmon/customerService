import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
          import(/* webpackChunkName: "About" */ "./views/About"),
    },
    {
      path: "/customerService",
      name: "CustomerService",
      component: () =>
          import(/* webpackChunkName: "CustomerService" */ "./views/CustomerService"),
    },
    {
      path: "/about2",
      name: "About2",
      component: () =>
          import(/* webpackChunkName: "About2" */ "./views/About2"),
    },

    {
      path: "/about1",
      name: "About1",
      component: () =>
          import(/* webpackChunkName: "About1" */ "./views/About1"),
    },

    {
      path: "/contact",
      name: "Contact",
      component: () =>
          import(/* webpackChunkName: "Contact" */ "./views/Contact"),
    },
    {
      path: "/success",
      name: "Success",
      component: () =>
          import(/* webpackChunkName: "Success" */ "./views/Success"),
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
          import(/* webpackChunkName: "NotFound" */ "./views/NotFound"),
    }
  ]
});

export default router;
