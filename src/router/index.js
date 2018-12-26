import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Login from '@/components/login.vue'

Vue.use(Router) // 注册vue-router

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
