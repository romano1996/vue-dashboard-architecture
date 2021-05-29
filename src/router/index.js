import { createRouter, createWebHistory } from "vue-router";
import { routes as authenticationRoutes } from "../modules/authentication/routes";
import { routes as dashboardRoutes } from "./routes/routes";

// Default routes
let routes = [
  {
    path: "/",
    name: "authentication-layout",
    children: authenticationRoutes,
    component: () => {
      return import("./../layouts/authentication");
    },
  },
  {
    path: "/dashboard",
    name: "dashboard-layout",
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

// Authentication check.
router.beforeEach((to, from, next) => {
  console.log("todo: implement authentication check. Move to other file..");
  next();
});

export default router;
