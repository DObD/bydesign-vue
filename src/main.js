// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Flamelink from 'flamelink'

import App from './components/App'
import router from './router'

const app = Flamelink({
  apiKey: 'AIzaSyAfAryrFwdxYAhkGLlvPi9Zmw29aNRHVJk',
  authDomain: 'darren-by-design.firebaseapp.com',
  databaseURL: 'https://darren-by-design.firebaseio.com',
  projectId: 'darren-by-design',
  storageBucket: 'darren-by-design.appspot.com',
  messagingSenderId: '198481969014'
})

app.content.get('posts')
  .then(posts => console.log('All posts: ', posts))
  .catch(error => console.log('Something gone wrong', error))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
