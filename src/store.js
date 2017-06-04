import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    admin: {
      username: null,
      password: null
    }
  },
  getters: {
    admin(state){
      return state.admin;
    }
  },
  mutations: {
    ADMIN(state, { user }){
      state.admin = user;
    }
  }
});
