<template>
  <div class="hello">
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
  methods: {
    login () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>
