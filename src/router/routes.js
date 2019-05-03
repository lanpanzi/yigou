import Head from '@/components/Head.vue'
import Foot from '@/components/Foot.vue'
import Detail from '@/components/Detail.vue'

// 路由懒加载，通常我们将页面级的组件实现分片打包
const Home = () => 
  import('@/pages/Home/Home.vue')
const Cake = () => 
  import('@/pages/Cake/Cake.vue')
const Bread = () => 
  import('@/pages/Bread/Bread.vue')
const IceCream = () => 
  import('@/pages/IceCream/IceCream.vue')
const Tea = () => 
  import('@/pages/Tea/Tea.vue')
const About = () => 
  import('@/pages/About/About.vue')
const Cart = () => 
  import('@/pages/Cart/Cart.vue')
const Login = () => 
  import('@/pages/Login/Login.vue')
const Register = () =>
  import('@/pages/Register/Register.vue')
const Order = () => 
  import('@/pages/Order/Order.vue')

const routes =  [
  { 
    path: '/', 
    redirect: '/home',
    meta: { 
      isNav: false
    }
  }, 
  {
    path: '/home',
    name: 'home',
    components: {
      head: Head,
      main: Home,
      foot: Foot
    },
    meta: {
      isNav: true,
      navTitle: '首页'
    }
  },
  {
    path: '/cake',
    name: 'cake',
    components: {
      head: Head,
      main: Cake,
      foot: Foot 
    },
    meta: {
      isNav: true,
      navTitle: '蛋糕'
    }
  },
  {
    path: '/bread',
    name: 'bread',
    components: {
      head: Head,
      main: Bread,
      foot: Foot 
    },
    meta: {
      isNav: true,
      navTitle: '面包'
    }
  },
  {
    path: '/iceCream',
    name: 'iceCream',
    components: {
      head: Head,
      main: IceCream,
      foot: Foot 
    },
    meta: {
      isNav: true,
      navTitle: '冰淇淋'
    }
  },
  {
    path: '/tea',
    name: 'tea',
    components: {
      head: Head,
      main: Tea,
      foot: Foot 
    },
    meta: {
      isNav: true,
      navTitle: '咖啡下午茶'
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      head: Head,
      main: About,
      foot: Foot 
    },
    meta: {
      isNav: true,
      navTitle: '关于我们'
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    components: {
      head: Head,
      main: Detail,
      foot: Foot
    },
    meta: {
      isNav: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      head: Head,
      main: Cart,
      foot: Foot
    },
    meta: {
      isNav: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      head: Head,
      main: Login,
      foot: Foot
    },
    meta: {
      isNav: false
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      head: Head,
      main: Register,
      foot: Foot
    },
    meta: {
      isNav: false
    }
  },
  {
    path: '/order',
    name: 'order',
    components: {
      head: Head,
      main: Order,
      foot: Foot
    },
    meta: {
      isNav: false,
      isAuthCheck: true
    }
  }
]

export default routes