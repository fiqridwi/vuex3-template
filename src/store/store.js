import Vue from "vue";
import Vuex from "vuex";
import myAge from "./Modules/age";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "John Doe",
    age: 25,
    car: "Tesla",
    model: "ModelX",
  },
  getters: {
    showName(state) {
      return state.name;
    },
  },
  mutations: {
    swapName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    swapName(context, payload) {
      setTimeout(() => {
        context.commit("swapName", payload);
      }, 2000);
    },
  },
  modules: {
    myAge,
  },
});
