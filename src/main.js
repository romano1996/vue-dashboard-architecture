import { createApp } from "vue";
import application from "./application.vue";
import router from "./router";
import store from "./modules/authentication/store";
import user from "@/modules/dashboard/store/user";

createApp(application).use(user).use(store).use(router).mount("#app");
