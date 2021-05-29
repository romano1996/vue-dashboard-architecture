import { createApp } from "vue";
import application from "./application.vue";
import router from "./router";
import store from "./modules/authentication/store";

createApp(application).use(store).use(router).mount("#app");
