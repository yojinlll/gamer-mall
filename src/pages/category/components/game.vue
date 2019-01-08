<template>
  <div class="g-game-wrapper">
    <g-lists :lists="rankLists"></g-lists>
  </div>
</template>

<script>
  import mixin from '@/modules/js/mixin.js'

  export default {
    name: 'gameBook',
    data(){
      return {
        active: true,
        upLists: [],
        downLists: [],
        lists: null,
      }
    },
    computed: {
      priceIndex(){
        return this.$store.state.priceIndex
      },
      // lists(){
      //   return this.$store.state.gameLists
      // },
      rankLists(){
        if(this.lists){
          if(this.active){
            this.active = false
            this.lists.forEach(item => {
              item.price > 10000 ? this.upLists.push(item) : this.downLists.push(item)
            })
          }
          if(this.priceIndex === 0){
            return this.lists
          }else if(this.priceIndex === 1){
            return this.upLists
          }else if(this.priceIndex === 2){
            return this.downLists
          }
        }
      }
    },
    created(){
      if(!this.lists){
        // this.$store.dispatch('getGameLists')
        this.$fetch(this.url.game).then(res => {
          this.lists = res.data.lists
        })
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="less" scoped>
  .g-game-wrapper {

    .goods-lists {

      li {
        margin: 10px 0;
        border: 1px solid black;
      }
    }
  }
</style>

