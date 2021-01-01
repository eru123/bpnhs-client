import Vue from "vue";
import Vuex from "vuex";
import store from "store";

const darkMode = store.get('darkMode') === true ? true : false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    darkMode: darkMode
  },
  mutations: {
    token(state, value) {
      state.token = value;
    },
    darkMode(state, value) {
      let dMode = value === true ? true : false;
      store.set('darkMode', dMode);
      state.darkMode = dMode;
    }
  },
  actions: {},
  modules: {}
});
