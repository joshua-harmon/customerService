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
