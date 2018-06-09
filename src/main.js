// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as svgicon from 'vue-svgicon'

import App from './components/App'
import router from './router'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

fontawesome.library.add(brands)

Vue.use(VueFire)
Vue.use(svgicon, {
  tagName: 'svgicon'
})

firebase.initializeApp({
  projectId: 'darren-by-design',
  storageBucket: 'darren-by-design.appspot.com',
  databaseURL: 'https://darren-by-design.firebaseio.com'
})

export const db = firebase.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

Vue.config.productionTip = false

export let title = ''
export let pathSlug = ''
if (location.pathname.split('/')[1] === 'writ') {
  pathSlug = location.pathname.split('/')[2]
}

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Darren by Design`
  title = `${to.name}`
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
