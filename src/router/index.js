import { createRouter, createWebHistory } from "vue-router";
import { routes as authenticationRoutes } from "../modules/authentication/routes";
import { routes as dashboardRoutes } from "../modules/dashboard/routes";

// Default routes
let routes = [
  {
    path: "/",
    name: "authentication",
    component: () => {
      return import("./../layouts/authentication");
    },
    children: authenticationRoutes,
    beforeEnter: (to, from, next) => {
      alert();

      next();
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    children: dashboardRoutes,
    component: () => {
      return import("./../layouts/dashboard");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
