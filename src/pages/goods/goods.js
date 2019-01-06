import '@/modules/css/common.css'
import './goods.less'

import Vue from 'vue'
import store from '../../stores/vuex/index.js'

import fetch from '@/modules/js/fetch.js'
import url from '@/modules/js/api.js'

Vue.prototype.$fetch = fetch
Vue.prototype.url = url

import mixin from '@/modules/js/mixin.js'


new Vue({
  el: '#app',
  store,
  data(){
    return {
      lists: null,
      goods: null,
      goodsId: 0,
      activeImg: 0,
      goodsNumber: 0,
      iconActive: false
    }
  },
  created(){
    this.getGoodsId()
    this.getLists()
  },
  methods: {
    getLists(){
      this.$fetch(this.url.all).then(res => {
        this.lists = res.data.lists
        this.findGoods()
      })
    },
    getGoodsId(){
      if (location.search) {
        this.goodsId = + location.search.slice(location.search.indexOf('=') + 1)
      }
    },
    findGoods(){
      this.lists.forEach(item => {
        if (item.id === this.goodsId) {
          console.log(item)
          this.goods = item
        }
      })
    },
    selectImg(index){
      this.activeImg = index
    },
    add(){
      this.goodsNumber ++
    },
    reduce(){
      if(this.goodsNumber === 0) return
      this.goodsNumber --
    },
    addCart(){
      if(this.goodsNumber){
        this.iconActive = true
        this.goodsNumber = 0
      }
    },
    goCart(){
      location.href = 'member.html'
    }
  },
  watch: {
    goods(obj){
      if (obj.img instanceof Array) return
      obj.img = obj.img.split(',')
    }
  },
  mixins: [mixin]
})
