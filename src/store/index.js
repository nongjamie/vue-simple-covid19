import Vue from 'vue'
import Vuex from 'vuex'

import moduleLoading from './loading.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loading: moduleLoading
  }
})
