import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../plugins/firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    userToken: null,
  },
  mutations: {
    setUser(state, payload) { state.user = payload; },
    setUserToken(state, payload) { state.userToken = payload; },
  },
  actions: {
  },
  modules: {
  },
});

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    store.commit('setUser', user);
    store.commit('setUserToken', await user.getIdToken());
  }
});

export default store;
