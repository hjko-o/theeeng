import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portfolio from '@/components/portfolio/Portfolio'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

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
