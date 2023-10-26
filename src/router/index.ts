import { createRouter, createWebHistory } from "vue-router";
const Users = () => import("@/modules/Users.vue");
const NewUser = () => import("@/modules/NewUser.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "users",
      component: Users,
    },
    {
      path: "/new-user",
      name: "new-user",
      component: NewUser,
    },
  ],
});

export default router;
