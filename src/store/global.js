import { createStore } from "vuex";
import { authentication } from "@/modules/authentication/store/authentication";
import { user } from "@/modules/user/store/user";

export const store = createStore({
  modules: {
    authentication: authentication,
    user: user,
  },
});
