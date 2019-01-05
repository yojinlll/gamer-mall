<template>
  <div class="g-all-wrapper">
    <g-lists :lists="lists"></g-lists>
  </div>
</template>

<script>
  import mixin from '@/modules/js/mixin.js'

  export default {
    name: 'allBook',
    computed: {
      lists(){
        return this.$store.state.allLists
      }
    },
    created(){
      if(!this.lists){
          this.$store.dispatch('getAllLists')
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="less" scoped>
  .g-all-wrapper {
    /*border: 1px solid black;*/
    padding: 0.1px;
  }


</style>
