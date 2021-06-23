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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/rendezVous') {
    if (!localStorage.getItem('token')) {
      next('/Login');
    }
  }
  if (to.fullPath === '/ref') {
    if (localStorage.getItem('token')) {
      next('/rendezVous');
    }
  }
  if (to.fullPath === '/CreateRendezVous') {
    if (!localStorage.getItem('token')) {
      next('/');
    }
  }
  if (to.fullPath === '/register') {
    if (localStorage.getItem('token')) {
      next('/rendezVous');
    }
  }


  if (to.fullPath === '/Home') {
    if (localStorage.getItem('token')) {
      next('/');
    }
  }
  next()

});
export default router;
