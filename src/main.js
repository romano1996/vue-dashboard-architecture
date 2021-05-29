import { createApp } from "vue";
import application from "./application.vue";
import router from "./router";
import { createStore } from "vuex";
import user from "@/modules/dashboard/store/user";
import authentication from "@/store/authentication";

// Register store modules.
const store = createStore({
  modules: {
    authentication: authentication,
    user: user,
  },
});

createApp(application).use(store).use(router).mount("#app");
