import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: history, // 切换路径模式，变成history模式，不然路径为/#/home
//   scrollBehavior: () => ({
//     y: 0
//   }),
//   linkActiveClass: 'active',
//   routes: [
//     {
//       path: '/index',
//       component: require('../components/index.vue')
//     },
//     {
//       path: '/login',
//       component: require('../components/login.vue')
//     }]
// })

// // 输出router
// export default router
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Login from '@/components/login.vue'

Vue.use(Router) // 注册vue-router

export default new Router({
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
