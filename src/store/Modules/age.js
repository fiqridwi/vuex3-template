const myAge = {
  state: {
    age: 25,
  },
  getters: {
    showAge(state) {
      return state.age + " years old";
    },
  },
  mutations: {
    addOne(state) {
      state.age++;
    },
    restOne(state) {
      state.age--;
    },
  },
  actions: {
    //   destructuring the context
    addOne({ commit }) {
      setTimeout(() => {
        commit("addOne");
      }, 2000);
    },
    restOne(context) {
      setTimeout(() => {
        context.commit("restOne");
      }, 2000);
    },
  },
};

export default myAge;
