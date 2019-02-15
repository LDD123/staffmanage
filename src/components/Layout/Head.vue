<template>
  <div class="head" >
    <span @click="changeCollapse(!isCollapse)">
      <span title="展开" v-if ="isCollapse" class="collaps-icon">
        <i class="iconfont icon-indent"></i>
      </span>
      <span title="收起" v-else class="collaps-icon">
        <i class="iconfont icon-outdent"></i>
      </span>
    </span>
    <!--设置登陆之后的个人列表信息  -->
  <span class="head-msg">
    <el-dropdown :hide-on-click="false">
      <span >
        <i class="iconfont icon-user" slot="prefix"></i>admin
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </span>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('dashboard/')
export default {
  data () {
    return {
    }
  },

  // 方式a：数组获取,混入
  computed: {
    ...mapState([
      'isCollapse'
    ]) },

  // 方法属性
  methods: {
    // changeStatus(params){
    //   console.log(params)
    //   this.$store.dispatch({
    //     type:'dashboard/changeCollapse',
    //     isCollapse:params
    //   })
    // },
    // // // 分发action中的change方法
    ...mapActions(['changeCollapse'])

  }
}
</script>
<style lang="less">
.head{
  // height: 100px;
}
.collaps-icon{
  display: inline-block;
  width: 50px;
  height: 100%;
  text-align: center;
}
.head :hover{
  background-color:#F9F9F9;
}
.icon-outdent.icon-indent{
  font-size: 3rem !important;
}
.head-msg{
  float: right;
  padding-right: 1vw;
}

</style>
