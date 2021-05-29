import { store } from "@/store/global";

export const routes = [
  {
    path: "",
    name: "dashboard",
    components: {
      one: function () {
        return import("./views/Dashboard");
      },
      two: function () {
        return import("./views/Personal/Show");
      },
      three: function () {
        return import("./views/Dashboard");
      },
    },
    beforeEnter: (to, from, next) => {
      if (!store.getters["user/get"]) {
        store
          .dispatch("user/fetch")
          .then(() => {
            next();
          })
          .catch(() => {
            alert("Failed to collect user information..");
            from();
          });
      } else {
        next();
      }
    },
  },
  {
    path: "page/two",
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
