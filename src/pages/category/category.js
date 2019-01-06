import '@/modules/css/common.css'
import './category.less'

import Vue from 'vue'
import router from './router/index.js'
import store from '../../stores/vuex/index.js'
import gNavigation from '@/components/g-nav.vue'
import Velocity from 'velocity-animate'

import fetch from '@/modules/js/fetch.js'
import url from '@/modules/js/api.js'
Vue.prototype.$fetch = fetch
Vue.prototype.url = url

let selectList = ['全 部', '游戏本', '超极本']
let interval = ['全 部', '10000 元以上', '10000 元以下']

new Vue({
  el: '#app',
  router,
  store,
  data: {
    selectList,
    interval,

    topIcon: false,
    show: false,
    selectIndex: 0,
  },
  computed: {
    priceIndex(){
      return this.$store.state.priceIndex
    },
  },
  created(){
    this.initRoute()
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    select(index){      // 选择分类
      if (index === 0) {
        this.show = false
        this.$router.push({path: '/'})
      }else {
        this.show = true
      }
      this.selectIndex = index
      if (index === 1) {
        this.$router.push({path: 'game'})
      }else if (index === 2) {
        this.$router.push({path: 'super'})
      }

    },
    selectPrice(index){     // 选择分类中的价格区间
      this.$store.commit('changeIndex', index)
    },
    initRoute(){      // 根据路径参数来初始页面的分类选择
      if (location.href.match('index=1')) {
        this.select(1)
      }else if (location.href.match('index=2')) {
        this.select(2)
      }
    },
    handleScroll(){
      document.documentElement.scrollTop > 100 ? this.topIcon = true : this.topIcon = false
    },
    goTop(){
      // document.documentElement.scrollTop = 0
      Velocity(document.body,'scroll',{duration: 500})
    }
  },
  components: {
    'g-nav': gNavigation
  }
})



