import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router/index.js'
import store from './store/index.js'
import Meta from 'vue-meta'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'


import './assets/css/style.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(LottieVuePlayer)
Vue.use(Meta)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
})

/* eslint-disable no-new */

Vue.config.productionTip = false

/* eslint-disable no-new */

let app = ''
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
  }
})
