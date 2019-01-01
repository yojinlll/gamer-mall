<template>
  <ul class="goods-lists">
    <li v-for="item in lists" :key="item.id" @click="goGoods(item)">
      <div>{{item.name}}</div>
      <div>{{item.info}}</div>
      <div>￥{{item.price}}</div>

      <div class="goods-img">
        <img :src="item.img[0]" alt="">
      </div>

      <div>查看详情</div>
    </li>
  </ul>
</template>

<script>
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
    }
  }
</script>

<style lang="less" scoped>
  .goods-lists {
    li {
      width: 300px;
      margin: 50px auto;
      border: 1px solid black;

      &:first-child {
        margin: 25px auto;
      }

      div {
        padding: 5px 0;
        border: 1px solid black;
        text-align: center;

        &:nth-child(3) {
          color: red;
        }
        &:last-child {
          color: #2e538e;
        }
      }

      .goods-img {
        border: 1px solid black;
        padding: 10px 0;
        min-height: 200px;
        background: white;

        img{
          width: 200px;
        }
      }

    }
  }
</style>
