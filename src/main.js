import { createApp } from "vue";
import application from "./application.vue";
import router from "./routing";
import { store } from "@/store/global";

createApp(application).use(store).use(router).mount("#app");
