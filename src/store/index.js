import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order)
    }
  }
})
