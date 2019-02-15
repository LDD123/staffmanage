<template>
  <el-container style="border: 1px solid #eee">
    <el-aside >
      <Menu/>
    </el-aside>
    <el-container>
      <el-header>
        <Head/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Layout/Menu.vue'
import Head from '@/components/Layout/Head.vue'
import Footer from '@/components/Layout/Footer.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    Menu,
    Head,
    Footer
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color:white;
    color: #333;
    text-align: left;
    line-height: 2rem;
    padding: 0vw
  }
  .el-footer{
    text-align: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: fit-content !important;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 500px;
    min-height: 100vh
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
