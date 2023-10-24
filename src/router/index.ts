import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/modules/Home.vue");
const About = () => import("@/modules/About.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
