import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import rendezVous from "../views/rendezVous.vue";
import Reference from "../views/Reference.vue";
import register from "../views/register.vue";
import CreateRendezVous from "../views/CreateRendezVous.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rendezVous",
    name: "rendezVous",
    component: rendezVous,
  },
  {
    path: "/ref",
    name : "reference",
    component : Reference
  },
  {
    path: "/register",
    name: "register",
    component : register
  },
  {
    path: "/CreateRendezVous",
    name: "CreateRendezVous",
    component : CreateRendezVous
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
