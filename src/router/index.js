import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Search from "@/views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
