export const routes = [
  {
    path: "/register",
    name: "register",
    component: function () {
      return import("./views/Register");
    },
  },
];
