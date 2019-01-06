import "@/modules/css/common.css"
import "./index.less"

import Vue from 'vue'

import gNav from '@/components/g-nav.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'


new Vue({
  el: '#app',
  data: {
    href:{
      game: ['顶级游戏本', 'category.html?index=1&price=up'],
      super: ['超级轻薄本', 'category.html?index=2&price=up']
    }

  },
  components: {
    'g-nav': gNav
  },
  methods: {
    close(){
      this.$children[0].show = false
    },
    handleHref(href){
      location.href = href
    }
  },
  mounted(){
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },

    })
  }
})
