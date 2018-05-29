import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Writings from '@/components/Writings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About'
      // component:
    },
    {
      path: '/writings',
      name: 'Writings',
      component: Writings
    }
  ]
})
