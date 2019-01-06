import '@/modules/css/common.css'
import './member.less'

import Vue from 'vue'
import router from './router/index.js'
import store from '@/stores/vuex/index.js'

import gNav from '@/components/g-nav.vue'

let navLists = {
  cart: '我的购物车',
  address: '我的地址'
}

new Vue({
  el: '#app',
  router,
  store,
  data: {
    navLists,
    activeRoute: 'cart'
  },
  methods: {
    selectRoute(route){
      this.activeRoute = route
      this.$router.push(route)
    }
  },
  components: {
    'g-nav': gNav
  }
})
