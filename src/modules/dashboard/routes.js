export const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    components: {
      default: function () {
        return import("./views/Dashboard");
      },
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
      default: function () {
        return import("./views/Dashboard");
      },
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
