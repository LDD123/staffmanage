<template>
  <div class="logindetail">
    <el-form
      :model="loginForm"
      ref="loginForm"
      label-width="100px"
    >
      <el-form-item
        label="用户名"
        prop="user"
        :rules="[
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ]"
    >
        <el-input
          v-model="loginForm.user"
          placeholder="admin"
          clearable
        >
          <i class="iconfont icon-user" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ]"
      >
        <el-input
          v-model="loginForm.password"
          placeholder="admin"
          type="password"
        >
          <i class="iconfont icon-lock" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="loninbtn"
          @click="submitForm('loginForm')"
          :loading = loginForm.btnLoading
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/utils/request'
import '@/mock/mock.js'
export default {
  data () {
    return {
      loginForm: {
        user: '',
        password: '',
        btnLoading: false
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {}
          params.user = this.loginForm.user
          params.password = this.loginForm.password
          request({
            url: 'api/login',
            method: 'post',
            data: params
          }).then(response => {
            if (response.data.loginFlag) {
              this.$notify({
                type: 'success',
                message: '登陆成功',
                position: 'bottom-right'
              })
              this.goHome()
            } else {
              this.$notify({
                type: 'error',
                message: '用户名或密码错误',
                position: 'bottom-right'
              })
            }
            console.log('response=>', response)
          })
        } else {
          return false
        }
      })
    },
    // 登录路由跳转
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loninbtn{
  width: 100%
}
</style>
