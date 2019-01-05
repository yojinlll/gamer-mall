import "@/modules/css/common.css"
import "./index.less"

import Vue from 'vue'
import gNav from '@/components/g-nav.vue'

new Vue({
  el: '#app',
  components: {
    'g-nav': gNav
  },
  methods: {
    close(){
      this.$children[0].show = false
    }
  }
})
