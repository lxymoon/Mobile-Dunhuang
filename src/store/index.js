import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false
  },
  getters: {
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    }
  },
  actions: {
  },
  modules: {
  }
})
