import Vuex from 'vuex';
import axios from 'axios';

// @todo Add modules from ~/store here and load them into the store

let store = new Vuex.Store({
  // actions,
  // getters,
  // mutations,
  // state,
});

// Bind Axios to Store as we don't have access to Nuxt's $axios instance here. See caveat below.
store.$axios = axios;

export default store;
