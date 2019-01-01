import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import allBook from '@/pages/category/components/all.vue'
import gameBook from '@/pages/category/components/game.vue'
import superBook from '@/pages/category/components/super.vue'


let routes = [
  {path: '/', component: allBook},
  {path: '/game', component: gameBook},
  {path: '/super', component: superBook}
]

let router = new Router({
  routes
})
export default router
