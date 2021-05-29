import { createRouter, createWebHistory } from "vue-router";
import { routes as authenticationRoutes } from "../modules/authentication/routes";
import { routes as dashboardRoutes } from "../modules/dashboard/routes";

// Default routes
let routes = [];

// Module routes
routes = routes.concat(authenticationRoutes);
routes = routes.concat(dashboardRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
