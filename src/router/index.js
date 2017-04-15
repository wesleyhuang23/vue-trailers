import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Trailer from '@/components/Trailer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trailer/:id',
      name: 'Trailer',
      component: Trailer
    }
  ]
})
