export const authentication = [
  {
    path: "/register",
    name: "register",
    component: function () {
      return import("../../modules/authentication/views/Register");
    },
  },
];
