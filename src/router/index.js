import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
