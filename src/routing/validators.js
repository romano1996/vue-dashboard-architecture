import { dashboard as dashboardRoutes } from "./routes/dashboard";

export const routeRequiresAuthentication = (route) => {
  // todo: inject right dashboard routes lol.
  const matches = dashboardRoutes.filter(
    (definition) => definition.path === route
  );
  return matches.length > 1;
};
