import Vue from 'vue'
import Router from 'vue-router'
// import Vuex from 'vuex'
import App from './App.vue'

import routerModel from './routerModel'
import store from './store'
import './assets/style/app.scss'

Vue.use(Router);
// Vue.use(Vuex)

const router = new Router(routerModel)
// const store = new Vuex.Store(Store)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 