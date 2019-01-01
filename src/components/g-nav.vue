<template>
  <nav class="g-nav">
    <div class="g-icon" @click="selected()">
      Gamer
    </div>
    <ul class="g-nav-link">
      <li>
        <div class="g-nav-button" :class="{show: show}" @click.stop="onShow">
          <div @click="goCart">{{string}}</div>
          <ul class="g-nav-button-list">
            <li @click="selected(item.href,index)"
                v-for="(item,index) in navConfig"
            >
              {{item.name}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
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
      onShow(){
        if (location.href.match('category')) return
        this.show = ! this.show
      },
      selected(href, index){
        href ? location.href = `${href}?index=${index}` : location.href = 'index.html'
      },
      goCart(){
        if (this.string === '购物车') {
          location.href = 'member.html'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-nav {
    display: flex;
    /*background: rgb(26, 24, 38);*/

    .g-icon {
      flex: 1;
      line-height: 50px;
      text-align: center;
      background: orangered;
    }
    .g-nav-link {
      flex: 3;
      display: flex;
      justify-content: flex-end;
      z-index: 1;

      li {
        background: orangered;
        line-height: 50px;
        width: 60px;
        text-align: center;

        .g-nav-button {

          .g-nav-button-list {
            position: absolute;
            display: none;

            li{
              border: 1px solid black;
            }
          }
        }
        .show {
          .g-nav-button-list {
            display: block;
          }
        }
      }
    }
  }
</style>
