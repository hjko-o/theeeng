import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portfolio from '@/components/portfolio/Portfolio'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
