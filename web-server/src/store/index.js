import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import indexModule from './modules/index'

export default new Vuex.Store({
    namespaced: true,
  state: {
      mainValue: 'in vuex'
  },
  mutations: {
      mutation1(){

      }
  },
  actions: {
      action1({ commit, state}, params) {
          return new Promise(function(resolve, reject){
            if (params.value){
                return resolve('success in action1')
            } else {
                return reject('fail in aciton1')
            }
          })
      }
  },
  modules: {
      index: indexModule
  }
})
