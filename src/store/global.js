// Register store modules.
import { createStore } from "vuex";
import { authentication } from "@/store/authentication";
import { user } from "@/modules/dashboard/store/user";

export const store = createStore({
  modules: {
    authentication: authentication,
    user: user,
  },
});
