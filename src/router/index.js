import { createRouter, createWebHistory } from "vue-router";
import { routes as authenticationRoutes } from "../modules/authentication/routes";

// Default routes
let routes = [];

// Module routes
routes = routes.concat(authenticationRoutes);

console.log(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
