<template>
  <div class="g-all-wrapper">
    <g-lists :lists="lists"></g-lists>
  </div>
</template>

<script>
  import mixin from '@/modules/js/mixin.js'

  export default {
    name: 'allBook',
    data(){
      return {
        lists: null
      }
    },
    computed: {
      // lists(){
      //   return this.$store.state.allLists
      // }
    },
    created(){
      if(!this.lists){
          // this.$store.dispatch('getAllLists')
        this.$fetch(this.url.all).then(res => {
          this.lists = res.data.lists
        })
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="less" scoped>
  .g-all-wrapper {
    /*padding: 0.1px;*/
  }


</style>
