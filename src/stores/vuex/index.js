import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import fetch from '@/modules/js/fetch.js'
import url from '@/modules/js/api.js'

let store = new Vuex.Store({
  state: {
    // allLists: null,
    // gameLists: null,
    // superLists: null,
    priceIndex: 0,

    cartLists: null,
    addressLists: null,
  },
  mutations: {
    // setAllLists(state, lists){
    //   state.allLists = lists
    // },
    // setGameLists(state, lists){
    //   state.gameLists = lists
    // },
    // setSuperLists(state, lists){
    //   state.superLists = lists
    // },
    changeIndex(state, index){
      state.priceIndex = index
    },


    setCartLists(state, lists){
      state.cartLists = lists
    },
    removeGoods(state, id){
      let array = []
      state.cartLists.forEach(item => {
        if (item.id !== id) {
          array.push(item)
        }
      })
      state.cartLists = array
    },

    setAddressLists(state, lists){
      state.addressLists = lists
    },
    addAddress(state, data){
      state.addressLists.push(data)
    },
    updateAddress(state, data){
      if (data.id) {
        state.addressLists.forEach(item => {
          if (item.id === data.id) {
            Object.assign(item, data)
          }
        })
      }
    },
    removeAddress(state, id){
      let newLists = state.addressLists.filter(item => {
        return item.id !== id
      })
      state.addressLists = newLists
    },
    setDefaultAddress(state, id){
      state.addressLists.forEach(item => {
        item.id === id ? item.show = true : item.show = false
      })
    }

  },
  actions: {
    // getAllLists(context){
    //   fetch(url.all).then(res => {
    //     context.commit('setAllLists', res.data.lists)
    //   })
    // },
    // getGameLists(context){
    //   fetch(url.game).then(res => {
    //     context.commit('setGameLists', res.data.lists)
    //   })
    // },
    // getSuperLists(context){
    //   fetch(url.super).then(res => {
    //     context.commit('setSuperLists', res.data.lists)
    //   })
    // },

    getCartLists(context){
      fetch(url.cart).then(res => {
        context.commit('setCartLists', res.data.lists)
      })
    },
    getAddressLists(context){
      fetch(url.address).then(res => {
        context.commit('setAddressLists', res.data.lists)
      })
    },
  }
})


export default store
