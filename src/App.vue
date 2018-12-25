<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/index">返回首页</router-link></li>
      </ul>
      <Login/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/login'
import Index from './components/index'
export default {
  name: 'App',
  components: {
    Login,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
