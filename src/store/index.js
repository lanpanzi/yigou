import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// Vue插件，实现修改购物车后保存localStorage
const saveStorage = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    // 每次 Mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

export default new Vuex.Store({
  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
  strict: true, 
  state,
  getters,
  mutations,
  actions,
  plugins: [saveStorage]
})