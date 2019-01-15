<template>
<div class="login">
  <div class="login-form">
    <h1>登录系统</h1>
    <br/>
    <LoginForm/>
  </div>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  background-image: url('../../assets/loginBg.png');
  background-size: 100%;
  height: 100vh;
  display: flex;
}
.login-form{
  width: 500px;
  padding-top: 15%;
  padding-left: 25%;
}
.login-form>h1{
  padding-left: 50%;
}
.login-form>div{
  padding-top: 0px;
}
</style>
