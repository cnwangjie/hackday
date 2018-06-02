import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [
      {
        address: '武汉华中科技大学'
      },
    ],
    accepted: [],
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  }
})
