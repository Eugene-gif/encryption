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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
  ],
});

export default router;
