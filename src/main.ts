import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../src/components/Home/Home.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  // { path: "/", component: Home },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
