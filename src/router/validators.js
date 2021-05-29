import { routes as dashboardRoutes } from "./routes/routes";

export const routeRequiresAuthentication = (route) => {
  // todo: inject right routes lol.
  const matches = dashboardRoutes.filter(
    (definition) => definition.path === route
  );
  return matches.length > 1;
};
