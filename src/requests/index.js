import axios from 'axios'
import { Spin, Message  } from 'iview'


const isdev = process.env.NODE_ENV === "development"
const ajax = axios.create({
  baseURL: isdev ? 'http://rap2api.taobao.org/app/mock/165295' : ''
})

// 添加一个请求拦截器
ajax.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  Spin.show({
    render: (h) => {
        return h('div', [
            h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                    type: 'ios-loading',
                    size: 18
                }
            }),
            h('div', 'Loading')
        ])
    }
  })
  return config
  }, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加一个响应拦截器
ajax.interceptors.response.use(res => {
  // 对响应数据做些什么
  Spin.hide()
  if (res.data.res_code === 200) {
    return res.data.res_body
  } else{
    Message.info('数据请求超时')
  }
  return res
  }, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 获取首页轮播图数据
export const getCarouselData = () => {
  return ajax.get('/api/v1/carousel')
}
// 获取首页活动数据
export const getActivityData = () => {
  return ajax.get('/api/v1/activity')
}
// 获取首页广告数据
export const getBannerData = () => {
  return ajax.get('/api/v1/banner')
}
// 获取首页列表标题数据
export const getListTopData = () => {
  return ajax.get('/api/v1/listTop')
}
// 获取首页匠心·原创数据
export const getOriginalData = () => {
  return ajax.get('/api/v1/original')
}
// 获取首页贝式·严选数据
export const getStrictData = () => {
  return ajax.get('/api/v1/strict')
}
// 获取首页网红爆款数据
export const getHotData = () => {
  return ajax.get('/api/v1/hot')
}
// 获取首页猜您喜欢数据
export const getLoveData = () => {
  return ajax.get('/api/v1/love')
}
// 获取蛋糕商品列表数据
export const getCakeListData = () => {
  return ajax.get('/api/v1/cakeList')
}
// 获取面包商品列表数据
export const getBreadListData = () => {
  return ajax.get('/api/v1/breadList')
}
// 获取冰淇淋商品列表数据
export const getIceCreamListData = () => {
  return ajax.get('/api/v1/iceCreamList')
}
// 获取咖啡下午茶商品列表数据
export const getTeaListData = () => {
  return ajax.get('/api/v1/teaList')
}
// 获取详情商品信息数据
export const getProductInfoData = (id) => {
  return ajax.get('/api/v1/productInfo?productID='+ id)
}
// 获取详情商品详情数据
export const getProductDetailData = (id) => {
  return ajax.get('/api/v1/productDetail?productID='+ id)
}
// 获取详情商品评价数据
export const getProductEvaluationData = (id) => {
  return ajax.get('/api/v1/productEvaluation?productID='+ id)
}
// 购物车热销商品推荐数据
export const getCartRecommendationData = () => {
  return ajax.get('/api/v1/recommendation')
}
// 用户登录
export const postLogin = (userInfo) => {
  return ajax.post('/api/v1/login', userInfo)
}