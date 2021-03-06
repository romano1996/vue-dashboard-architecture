import { FetchPersonalInformation } from "../repositories/information";

export const user = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    fetch(context) {
      return FetchPersonalInformation().then((response) => {
        context.commit("setUser", response.data.results[0]);
      });
    },
  },
  getters: {
    get: (state) => {
      return state.user;
    },
  },
};
