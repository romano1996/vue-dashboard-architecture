import { store } from "@/store/global";

export const dashboard = [
  {
    path: "",
    name: "dashboard",
    components: {
      one: function () {
        return import("../../modules/user/views/Show");
      },
      two: function () {
        return import("../../modules/product/views/Index");
      }
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
];
