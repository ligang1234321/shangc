import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Shop from '../views/Shop.vue'
import Discover from '../views/Discover.vue'
import Shopcar from '../views/Shopcar.vue'
import My from '../views/My.vue'
import Register from '../views/zhuden/Register.vue'
import Login from '../views/zhuden/Login.vue'
import Shopinfo from '../views/shopinfo/Shopinfo.vue'
import Jiesuan from '../views/shopinfo/Jiesuan.vue'
import Money from '../views/shopinfo/Money.vue'
import Shibai from '../views/shopinfo/Shibai.vue'
import Orders from '../views/shopinfo/Orders.vue'
import Cg from '../views/shopinfo/Cg.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'index',
    component: Index
  },
  //	/:id
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: Shopcar
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shopinfo',
    name: 'shopinfo',
    component: Shopinfo
  },
  {
    path: '/jiesuan',
    name: 'jiesuan',
    component: Jiesuan
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/shibai',
    name: 'shibai',
    component: Shibai
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/cg',
    name: 'cg',
    component: Cg
  },
  {
	path:'/daifuk',
	name:'daifuk',
	component: () => import('../views/shopinfo/Daifuk.vue')
  }
]

const router = new VueRouter({
	mode:'history',
	routes
})

export default router
