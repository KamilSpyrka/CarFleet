import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    cars: null,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) state.isUserLoggedIn = true;
      else state.isUserLoggedIn = false;
    },
    setUser(state, user) {
      state.user = user;
    },
    setCars(state, cars) {
      state.cars = cars;
    },
  },

  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setCars({ commit }, cars) {
      commit("setCars", cars);
    },
  },
});
