export const routes = [
  {
    path: "/",
    name: "login",
    component: function () {
      return import("./views/Login");
    },
  },
];
