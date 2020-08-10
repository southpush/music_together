import Vue from 'vue'
import './plugins/axios'
import "./plugins/websocket"
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import general style
import '@/styles/common.styl'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.$vue = vue