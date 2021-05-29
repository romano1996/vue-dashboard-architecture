import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    get: (state) => () => {
      return state.user;
    },
  },
});
