import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Writings from '@/components/Writings'
import Writ from '@/components/Writ'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: 'Random Ramblings',
      component: Writings
    },
    {
      path: '/writ/:slug',
      name: 'Writ',
      component: Writ
    }
  ]
})
