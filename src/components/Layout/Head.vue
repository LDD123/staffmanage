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
  background-color:#D3DCE6
}
.icon-outdent.icon-indent{
  font-size: 3rem !important;
}

</style>
