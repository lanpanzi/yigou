export default {
  // 通常是同步修改 state 的方法
  // mutations 中定义的方法，都有两个参数
  // 第一个参数为固定的 state
  // 第二个参数为方法所需要的一些额外数据

  // 向购物车数组中保存“加入购物车”的商品对象
  addCartItem(state, item) {
    const has = state.cart.some(curr => curr.id === item.id)
    if (has) {
      state.cart = state.cart.filter(curr => {
        if (curr.id === item.id) 
          curr.amount += 1
        return true
      })
    } else{
      item = {
        ...item,
        amount: 1,
        check: true
      }
      state.cart.push(item) 
    }
  },
  // 增加商品数量
  addAmount(state, id) {
    state.cart.filter(curr => {
      if (curr.id === id) 
        curr.amount += 1
      return true
    })
  },
  // 减少商品数量
  removeAmount(state, id) {
    state.cart = state.cart.filter(curr => {
      if (curr.id === id && curr.amount > 1) 
        curr.amount -= 1
      return true
    })
  },
  // 删除商品
  deleteCartItem(state, id) {
    state.cart = state.cart.filter(curr => curr.id !== id)
  },
  // 全选
  changeCheckAll(state) {
    state.checkAll = !state.checkAll
    state.cart = state.cart.filter(curr => {
      curr.check = !curr.check
      return true
    })
  },
  // 单选
  changeCheck(state, id) {
    state.cart = state.cart.filter(curr => {
      if (curr.id === id) 
        curr.check = !curr.check
      return true
    })
    state.checkAll = state.cart.every(curr => curr.check === true)
  }
}