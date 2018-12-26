import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import api from './api/index'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(ElementUI)

// Vue.prototype.$ajax = axios // 修改Vue的原型属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
// const app = new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       const matchingView = routes[this.currentRoute]
//       return matchingView
//         ? require('./pages/' +matchingView + '.vue')
//         : require('./pages/404.vue')
//     }
//   },
//   render (h) {
//     return h(this.ViewComponent)
//   }
// })

// window.addEventListener('popstate',() => {
//   app.currentRoute = window.location.pathname
// })

// let token = ''
// // http request 请求拦截器，有token值则配置上token值
// axios.interceptors.request.use(
//   config => {
//     if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//       config.headers.Authorization = token
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   })
// // http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//         // 这里写清除token的代码
//           router.replace({
//             path: 'login',
//             query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
//           })
//       }
//     }
//     return Promise.reject(error.response.data)
//   })

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type')
//   res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'GET', 'DELETE', 'OPTIONS')
//   next()
// })

// // 以下是之前的路由配置代码
// app.use('/users', router)
