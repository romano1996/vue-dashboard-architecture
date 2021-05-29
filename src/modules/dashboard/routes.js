export const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    components: {
      one: function () {
        return import("./views/Dashboard");
      },
      two: function () {
        return import("./views/PersonalInformation");
      },
      three: function () {
        return import("./views/Dashboard");
      },
    },
  },
  {
    path: "/dashboard/two",
    name: "dashboard-page-two",
    components: {
      one: function () {
        return import("./views/Dashboard");
      },
      two: function () {
        return import("./views/Dashboard");
      },
      three: function () {
        return import("./views/Dashboard");
      },
    },
  },
];
