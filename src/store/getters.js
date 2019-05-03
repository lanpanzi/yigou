export default {
  // 根据 state 派生的新的状态，相当于 computed
  // 这些派生的新数据会被缓存，当依赖发生改变时，再重新计算

  // 统计总数量
  totalAmount(state) {
    return state.cart.reduce((result, curr) => {
      if (curr.check) {
        result += curr.amount
      }
      return result
    }, 0)
  },
  // 所有商品总价
  total(state) {
    return state.cart.reduce((result, curr) => {
      if (curr.check) {
        result += curr.price * curr.amount
      }
      return result
    }, 0)
  }
}