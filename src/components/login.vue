<template>
  <div id="app">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="userName">
    <el-input type="password" v-model="ruleForm2.userName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="userPass">
    <el-input type="password" v-model="ruleForm2.userPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        userName: '',
        userPass: ''
      },
      rules2: {
        userName: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userPass: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$api.post({
            methods: 'post',
            url: '/yanzheng'
          })
          // .then(function (response) { // 请求成功
          //   console.log(response)
          // }).catch(function (error) { // 请求失败
          //   console.log(error)
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
