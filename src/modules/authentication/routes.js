export const routes = [
  {
    path: "/",
    name: "login",
    component: function () {
      return import("./views/Login");
    },
  },
  {
    path: "/register",
    name: "register",
    component: function () {
      return import("./views/Register");
    },
  },
];
