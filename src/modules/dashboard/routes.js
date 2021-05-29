import { store } from "@/store/global";

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
    beforeEnter: (to, from, next) => {
      store.dispatch("user/fetch").then(() => {
          next();
        })
        .catch(() => {
          alert("Failed to collect user information..");
          from();
        });
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
