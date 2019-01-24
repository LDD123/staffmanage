<template>
  <div class="meun-div">
      <el-menu
        default-active="2"
        class="el-menu-vertical"
        style="border-right:none"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
        <span class="menu-index-title">人员管理</span>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>门户</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="1-1">分析页</el-menu-item>
            <el-menu-item index="1-2">监控页</el-menu-item>
            <el-menu-item index="1-3">工作台</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('dashboard/')
export default {
  // 方式a：数组获取,混入
  computed: {
    ...mapState([
      'isCollapse'
    ]) },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.meun-div{
  background-color:#545c64;
  color:#fff;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
}
.el-menu-vertical:not(.el-menu--collapse){
  width: 20vw;
}
.el-menu--collapse{
  width: 10vw;
}
</style>
