<template>
  <div class="logindetail">
    <el-form  :model="loginForm" label-width="100px">
      <el-form-item
        label="用户名"
        :rules="[
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ]"
    >
        <el-input
          v-model="input"
          placeholder="用户名"
          clearable
        >
          <i class="iconfont icon-user" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        :rules="[
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ]"
      >
        <el-input
          v-model="input"
          placeholder="密码"
          clearable
        >
          <i class="iconfont icon-lock" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="loninbtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loninbtn{
  width: 100%
}
</style>
