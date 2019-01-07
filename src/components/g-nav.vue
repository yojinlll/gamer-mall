
<template>
  <nav class="g-nav">
    <g-button class="g-mint-button" @click="selectRoute()">首页</g-button>

    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gamer"></use>
    </svg>

    <div>
      <g-button class="g-mint-button" @click.stop="activeMenu">{{string}}</g-button>

      <ul class="menu-list" v-show="show">
        <li v-for="(item,index) in navConfig"
            @click="selectRoute(item.href,index)"
        >{{item.name}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {Button} from 'mint-ui'
  import '@/modules/assets/svg.js'

  let navConfig = [
    {
      name: '全 部',
      href: 'category.html'
    },
    {
      name: '游戏本 ',
      href: 'category.html'
    },
    {
      name: '轻薄本',
      href: 'category.html'
    },
  ]

  export default {
    name: 'gamerNav',
    data(){
      return {
        show: false,
        string: '分类',
        navConfig
      }
    },
    created(){
      if (location.href.match('category')) {
        this.string = '购物车'
      }
    },
    methods: {
      selectRoute(href, index){
        href ? location.href = `${href}?index=${index}` : location.href = 'index.html'
      },
      activeMenu(){
        if(this.string === '分类'){
          this.show = ! this.show
        }else{
          location.href = 'member.html'
        }
      }
    },
    components: {
      'g-button': Button
    }
  }
</script>

<style lang="less" scoped>
  .g-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(255, 131, 107);
    height: 70px;
    padding: 0 10px;
    position: relative;

    .menu-list{
      position: absolute;
      top: 90%;
      right: 8px;
      width: 100px;
      border-radius: 5px;
      background: #f6f8fa;
      color: #656b79;
      font-size: 18px;
      z-index: 100;
      user-select: none;

      li{
        text-align: center;
        margin: 10px;
        padding: 5px;
        border-bottom: 2px solid #d3ddee;

        &:last-child{
          margin-bottom: 20px;
        }
      }
    }

    .g-mint-button{
      width: 80px;
    }
  }
</style>
