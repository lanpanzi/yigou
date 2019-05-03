export default {
  // 状态，数据
  cart: JSON.parse(window.localStorage.getItem('cart')) || [], // 保存购物车数据
  checkAll: true, // 判断是否全选
  isLogin: window.localStorage.getItem('token') != null // 标识用户是否登录
}