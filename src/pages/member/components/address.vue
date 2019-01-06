<template>
  <div class="address-wrapper">
    <ul class="address-lists">

      <div class="g-loading" v-show="!lists">
        <g-loading :type="3" :size="100" color="#f5c437"></g-loading>
      </div>

      <li class="address-item" v-for="item in lists"
          @click="selectAddress(item)"
          :class="{select: item.select === true}"
      >
        <div class="point" :class="{show:item.show == true}"></div>

        <div class="address-msg">
          <div class="msg-item">
            <div>收货人：</div>
            <span>{{item.name}}</span>
          </div>
          <div class="msg-item">
            <div>联系方式：</div>
            <span>{{item.phone}}</span>
          </div>
          <div class="msg-item">
            <div>联系地址：</div>
            <span>{{item.address}}</span>
          </div>
        </div>

        <div class="edit-button" @click="editAddress(item)">修改</div>
      </li>
    </ul>
    <div class="newAddress-button" @click="editAddress">添加地址</div>

    <div class="change-popover" v-show="edit">
      <div class="address-form">
        <div class="form-row">
          <label>收货人：</label>
          <input type="text" placeholder="请输入姓名" name="user_name" v-model="name">
        </div>
        <div class="form-row">
          <label>联系方式：</label>
          <input type="text" placeholder="请输入联系电话" name="user_phone" v-model="phone">
        </div>
        <div class="form-row">
          <label>地址：</label>
          <input type="text" placeholder="请输入地址" name="user_address" v-model="address">
        </div>
        <div class="form-row" options v-show="!showButton">
          <div class="options" @click="setDefaultMark">
            <div class="icon" v-show="defaultMark"></div>
          </div>
          <div class="text">设为默认地址</div>
        </div>
        <div class="edit-options">
          <div class="delete-button" @click="remove" v-show="showButton">删除</div>
          <div class="show-button" @click="setDefault" v-show="showButton">默认地址</div>
          <div class="save-button" @click="save">保存</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '@/modules/js/mixin.js'

  export default {
    name: "gAddress",
    data(){
      return {
        edit: false,
        showButton: true,
        defaultMark: false,

        name: '',
        phone: '',
        address: '',
        show: false,
        id: ''
      }
    },
    computed: {
      lists(){
        return this.$store.state.addressLists
      }
    },
    created(){
      if (! this.lists) {
        this.$store.dispatch('getAddressLists')
      }
    },
    methods: {
      selectAddress(address){

      },
      editAddress(item){
        this.edit = true
        Object.assign(this, item)
        if (! this.id) {
          this.showButton = false
        }
      },
      save(){
        let {name, phone, address, show, id} = this
        if (! id) {
          if (name && phone && address) {
            id = parseInt(Math.random() * 100)
            this.defaultMark ? show = true : show = false

            let data = {name, phone, address, show, id}
            this.$store.commit('addAddress', data)

            if (this.defaultMark) {
              this.$store.commit('setDefaultAddress', data.id)
            }
          }else {
            console.log('未输入有效地址')
          }
        }else {
          let data = {name, phone, address, show, id}
          this.$store.commit('updateAddress', data)
        }
        this.edit = false
        this.resetData()
      },
      remove(){
        if(this.show){
          this.$store.commit('setDefaultAddress', this.lists[0].id)
        }
        this.$store.commit('removeAddress', this.id)
        this.edit = false
        this.resetData()
      },
      setDefault(){
        this.$store.commit('setDefaultAddress', this.id)
        this.edit = false
        this.resetData()
      },
      setDefaultMark(){
        this.defaultMark = !this.defaultMark
      },
      resetData(){
        this.name = ''
        this.phone = ''
        this.address = ''
        this.show = false
        this.id = ''
        this.defaultMark = false
        this.showButton = true
      }
    },
    watch: {
      lists(){
        if (this.lists.length === 1) {
          this.$store.commit('setDefaultAddress', this.lists[0].id)
        }
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="less" scoped>

  .address-wrapper {
    background: #FF836B;
    min-height: 450px;
    padding: 0.1px;
    margin: 0 10px;
    border-radius: 5px;

    .address-lists {
      margin: 30px 0 80px;

      .address-item {
        background: white;
        margin: 10px;
        border-radius: 10px;
        /*line-height: 50px;*/
        display: flex;
        align-items: center;

        .point {
          width: 20px; height: 20px;
          border-radius: 50%;
          margin: auto 10px;
        }
        .show {
          background: cornflowerblue;
        }
        .address-msg {
          margin: 5px 0;
          flex: 1;

          .msg-item {
            display: flex;
            justify-content: flex-start;

            div { flex: 1; color: orangered; }
            span { flex: 2; }
          }
        }
        .edit-button {
          color: white;
          margin: 5px;
          padding: 5px;
          border-radius: 5px;
          background: rgba(240, 3, 0, 0.76);
        }
      }
    }

    .newAddress-button {
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      background: #ffa144;
      position: fixed;
      bottom: 20px; left: 50%;
      transform: translateX(-50%);
    }

    .change-popover {
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0; left: 0;
      background: rgba(70, 70, 70, 0.72);

      .address-form {
        width: 90%; height: 320px;
        border-radius: 10px;
        background: white;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;

        .form-row {
          margin: 10px;

          &[options] {
            margin: 40px 0 0 0;
            display: flex;
            justify-content: center;

            .options {
              border: 1px solid black;
              width: 20px; height: 20px;
              margin-right: 10px;
              padding-left: 3px;

              .icon:before {
                display: inline-block;
                content: '✓'
              }
            }
            .text {
              line-height: 20px;
            }
          }

          label { color: red; }
          input { width: 300px; }
        }
      }

      .edit-options {
        width: 300px;
        position: absolute;
        left: 50%; bottom: 10%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          margin: 0 5px;
          border-radius: 5px;
          width: 100px; height: 40px;
          text-align: center;
          line-height: 40px;
        }

        .delete-button {
          background: #ff9882;
        }
        .show-button {
          background: #8ebfff;
        }
        .save-button {
          background: #a7e285;
        }
      }
    }
  }

</style>
