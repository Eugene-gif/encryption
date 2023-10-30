import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import { useStore } from "@/stores/store";

const BaseLayout = () => import("@/layouts/BaseLayout.vue");
const AuthLayout = () => import("@/layouts/AuthLayout.vue");

// Основные роуты
const Users = () => import("@/modules/Users/Users.vue");
const NewUser = () => import("@/modules/NewUser.vue");
const NotFound = () => import("@/components/NotFound.vue");

// Авторизация
const Authorization = () => import("@/modules/Auth/Auth.vue");
// const Registration = () =>
// import("@/modules/AuthForms/Registration.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "BaseLayout",
    component: BaseLayout,
    redirect: "/users",
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/users",
        name: "Users",
        component: Users,
        // children: [
        //   {
        //     path: "/new-user",
        //     name: "NewUser",
        //     component: NewUser,
        //   },
        // ],
      },
      {
        path: "/new-user",
        name: "NewUser",
        component: NewUser,
      },
    ],
  },
  {
    path: "/",
    name: "AuthLayout",
    component: AuthLayout,
    redirect: "/auth",
    children: [
      {
        path: "/auth",
        name: "Authorization",
        component: Authorization,
      },
      // {
      //   path: "register",
      //   name: "auth-register",
      //   component: Registration,
      // },
    ],
  },
  {
    path: "/:pathMath(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const store = useStore();
    const profile = store.profile;
    const requireAuth = to.matched.some(
      (record) => record.meta.requiresAuth
    );
    // const roles = to.matched.some((record) => record.meta.role);

    to.params.activeLink = "true";

    if (
      to.path === "/auth" &&
      // || to.path === "/auth/register"
      store.isAuthenticated
    ) {
      next("/");
    }

    if (requireAuth) {
      if (!store.isAuthenticated) {
        next({
          path: "/auth",
        });
      } else {
        // // if (roles) {
        // //     checkRole();
        // // } else {
        // //     next();
        // // }
        next();
      }
    } else {
      next();
    }
  }
);

export default router;
