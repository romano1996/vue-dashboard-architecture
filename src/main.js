import { createApp } from "vue";
import application from "./application.vue";
import router from "./routing";
import { store } from "@/store/global";
import "./styling/app.css";

createApp(application).use(store).use(router).mount("#app");
