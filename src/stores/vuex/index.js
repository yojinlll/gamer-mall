import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import fetch from '@/modules/js/fetch.js'
import url from '@/modules/js/api.js'

let store = new Vuex.Store({
  state: {
    allLists: null,
    gameLists: null,
    superLists: null,
    priceIndex: 0,
    goods: null,
  },
  mutations:{
    setAllLists(state,lists){
      state.allLists = lists
    },
    setGameLists(state,lists){
      state.gameLists = lists
    },
    setSuperLists(state,lists){
      state.superLists = lists
    },
    changeIndex(state,index){
      state.priceIndex = index
    }
  },
  actions: {
    getAllLists(context){
      fetch(url.all).then(res => {
        context.commit('setAllLists',res.data.lists)
      })
    },
    getGameLists(context){
      fetch(url.game).then(res => {
        context.commit('setGameLists',res.data.lists)
      })
    },
    getSuperLists(context){
      fetch(url.super).then(res => {
        context.commit('setSuperLists',res.data.lists)
      })
    }
  }
})


export default store
