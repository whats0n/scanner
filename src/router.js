import Vue from 'vue'
import Router from 'vue-router'
import AppIframe from './AppIframe'
import AppRedirect from './AppRedirect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppIframe',
      component: AppIframe
    },
    {
      path: '/redirect/',
      name: 'AppRefirect',
      component: AppRedirect
    }
  ]
})