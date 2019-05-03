// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import iView from 'iview'
import './theme/index.less'

// 引入requests下的所有接口
import * as $http from './requests'
Vue.prototype.$http = $http

Vue.use(iView)

Vue.config.productionTip = false

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthCheck) {
    // 需要有权限才能查看的
    // 判断用户是否登录
    if (store.state.isLogin) {
      // 已登录
      next()
    } else{
      next({
        name: "login",
        params: {
          from: to
        }
      })
    }
  } else{
    next()
  }
})

// 全局Mixin
Vue.mixin({
  filters: {
    moneyFormat(v) {
      return Number(v).toFixed(2)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
