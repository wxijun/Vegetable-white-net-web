<template>
  <div>
    欢迎！<b @click="login">点击这里登录</b>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.$api.get('/user/index', null, r => {
      console.log(r)
    })
  },
  methods: {
    login () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>
