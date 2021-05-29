export const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: function () {
      return import("./views/Dashboard");
    },
  },
];
