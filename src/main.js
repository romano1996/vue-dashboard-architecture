import { createApp } from "vue";
import App from "./modules/authentication/App.vue";
import router from "./modules/authentication/router";
import store from "./modules/authentication/store";

createApp(App).use(store).use(router).mount("#app");
