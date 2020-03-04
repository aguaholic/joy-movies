import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../src/components/Home/Home.vue'
import Detail from '../src/components/Detail.vue'
import Random from '../src/components/Random.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: '/detail/:id', name: 'detail', component: Detail },
  { path: '/random', component: Random },
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
