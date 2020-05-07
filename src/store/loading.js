const state = {
  isLoading: false
}

const mutations = {
  setLoading(state, payload) {
    state.isLoading = payload;
  }
}

const actions = {
  start({ commit }) {
    commit('setLoading', true);
  },
  stop({ commit }) {
    commit('setLoading', false);
  },
}

const getters = {
  isLoading(state) {
    return state.isLoading;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}