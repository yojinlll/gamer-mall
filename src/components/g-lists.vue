<template>
  <ul class="goods-lists">

    <div class="g-loading" v-show="!lists">
      <g-loading :type="3" :size="100" color="#f5c437"></g-loading>
    </div>

    <li v-for="item in lists" :key="item.id" @click="goGoods(item)">
      <div>{{item.name}}</div>
      <div>{{item.info}}</div>
      <div>￥{{item.price}}</div>

      <div class="goods-img">
        <img :src="item.img[0]" alt="">
      </div>

      <div>查看详情</div>
    </li>

    <div class="lists-tips" v-show="lists">END</div>
  </ul>
</template>

<script>
  import { Spinner } from 'mint-ui';

  export default {
    name: "gamerLists",
    props: {
      lists: {
        type: Array,
        default: null
      }
    },
    watch: {
      lists(){
        this.lists.forEach(item => {
          if (item.img instanceof Array) return
          item.img = item.img.split(',')
        })
      }
    },
    methods: {
      goGoods(item){
        location.href = `goods.html?id=${item.id}`
      }
    },
    components: {
      'g-loading': Spinner
    }
  }
</script>

<style lang="less" scoped>
  .goods-lists {
    li {
      background: white;
      width: 90%;
      padding: 5px;
      margin: 30px auto;
      border-radius: 10px;

      &:first-child {
        margin: 25px auto;
      }

      div {
        padding: 5px 0;
        color: #656b79;
        text-align: center;

        &:nth-child(1) {
          font-size: 20px;
          font-weight: bold;
        }
        &:nth-child(3) {
          color: #ff4641;
        }
        &:last-child {
          color: #2e538e;
        }
      }

      .goods-img {
        padding: 10px 0;
        min-height: 200px;
        background: white;

        img{
          width: 200px;
        }
      }
    }

    .lists-tips{
      text-align: center;
      color: #303030;
    }
  }
</style>
