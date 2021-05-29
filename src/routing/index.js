import { createRouter, createWebHistory } from "vue-router";
import { authentication as authenticationRoutes } from "./routes/authentication";
import { dashboard as dashboardRoutes } from "./routes/dashboard";
import { routeRequiresAuthentication } from "@/routing/validators";
// Default dashboard
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
  if (routeRequiresAuthentication(to.path)) {
    alert("You should authenticate.");
    from();
  }
  next();
});

export default router;
