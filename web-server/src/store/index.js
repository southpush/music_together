import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import indexModule from './modules/index'

export default new Vuex.Store({
    namespaced: true,
    state: {
        audioContext: null,
    },
    mutations: {
        // 创建上下文
        CREATE_AUDIO_CONTEXT(state) {
            if (state.audioContext == null || state.audioContext.constructor === AudioContext) {
                state.audioContext = new AudioContext()
            }
        }
    },
    actions: {
        action1({ commit, state }, params) {
            return new Promise(function (resolve, reject) {
                if (params.value) {
                    return resolve('success in action1')
                } else {
                    return reject('fail in aciton1')
                }
            })
        }
    },
    modules: {
        index: indexModule
    },
    getters: {
        audioContext: state => state.audioContext
    }
})
