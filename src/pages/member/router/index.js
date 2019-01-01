import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import cart from '@/pages/member/components/cart.vue'
import address from '@/pages/member/components/address.vue'


let routes = [
  { path: '', redirect: '/cart' },
  {path: '/cart', component: cart},
  {path: '/address', component: address},
]

let router = new Router({
  routes
})
export default router
