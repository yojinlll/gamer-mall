<template>
  <div class="member-cart">
    <ul class="cart-goods-lists">

      <div class="g-loading" v-show="!lists">
        <g-loading :type="3" :size="100" color="#f5c437"></g-loading>
      </div>

      <li class="cart-goods"
          v-for="item in lists"
          @click="selectGoods(item)"
          :class="{select: item.select === true}"
      >
        <div class="point"></div>
        <div class="goods-msg">
          <img :src="item.img" alt="" @click="goodsPage(item.id)">
          <div msg>
            <div name>{{item.goods}}</div>
            <div data>
              <div change>
                <span class="plus" @click.stop="reduce(item)">-</span>
                <input type="text" v-model="item.number">
                <span class="reduce" @click.stop="add(item)">+</span>
              </div>
              <span price>￥{{item.price}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="cart-footer" :class="{select: allSelected === true}">
      <div class="all-button"
           @click="selectAll">
        <div class="point"></div>
        <span>全选</span>
      </div>
      <div class="cart-count">
        <span>合计 : {{goodsCount}}</span>
        <div>结算</div>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '@/modules/js/mixin.js'

  export default {
    name: "gCart",
    data(){
      return {}
    },
    computed: {
      lists(){
        return this.$store.state.cartLists
      },
      allSelected: {
        get(){
          if (this.lists && this.lists.length) {
            return this.lists.every(item => {
              return item.select
            })
          }
          return false
        },
        set(newVal){
          if (this.lists && this.lists.length) {
            this.lists.forEach(item => {
              item.select = newVal
            })
          }
        }
      },
      goodsCount(){
        // let array = []
        let total = 0
        if (this.lists && this.lists.length) {
          this.lists.forEach(item => {
            if (item.select) {
              // array.push(item)
              total += item.price * item.number
            }
          })
        }
        return total
      }
    },
    created(){
      if (! this.lists) {
        this.$store.dispatch('getCartLists')
      }
    },
    methods: {
      reduce(item){
        if (item.number === 1) {
          let result = confirm('是否删除商品？')
          result ? this.removeGoods(item.id) : item.number === 1
        }else {
          item.number --
        }
      },
      add(item){
        item.number ++
      },
      removeGoods(id){
        this.$store.commit('removeGoods', id)
      },
      selectGoods(item){
        item.select = ! item.select
      },
      selectAll(){
        this.allSelected = ! this.allSelected
      },
      goodsPage(id){
        location.href = `goods.html?id=${id}`
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="less" scoped>

  .member-cart {
    background: #FF836B;
    min-height: 450px;
    padding: 0.1px;
    margin: 0 10px;
    border-radius: 5px;

    .point {
      width: 20px; height: 20px;
      border-radius: 50%;
      margin: auto 10px;
    }
    .select {
      .point {
        background: cornflowerblue;
      }
    }

    .cart-goods-lists {
      margin-top: 30px;

      .cart-goods {
        background: white;
        margin: 10px;
        border-radius: 10px;
        height: 100px;
        display: flex;

        .goods-msg {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 5px;

          img {
            width: 60px;
          }
          div[msg] {
            margin-left: 20px;

            div {
              width: 200px;
            }

            div[name] {
              margin-bottom: 10px;
              font-size: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            div[data] {
              display: flex;
              justify-content: space-around;

              span[price] {
                display: flex;
                align-items: center;
                color: red;
              }

              div[change] {
                display: flex;
                font-size: 18px;

                span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 30px;
                  height: 30px;
                  color: #2a2a2a;
                  background: rgb(242, 242, 242);
                }
                input {
                  margin-left: 10px;
                  width: 20px;
                }
              }
            }
          }
        }
      }
    }

    .cart-footer {
      width: 90vw; height: 50px;
      background: white;
      border-radius: 10px;
      position: fixed;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      display: flex;
      align-items: center;

      .all-button {
        display: flex;
        align-items: center;
        padding: 10px;
      }
      .cart-count {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        span {
          color: red;
        }
        div {
          margin: 0 10px;
          padding: 10px;
          border-radius: 5px;
          background: #ff0000c2;
          color: white;
        }
      }
    }
  }

</style>
