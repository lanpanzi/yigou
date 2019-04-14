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