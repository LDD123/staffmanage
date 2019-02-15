const dashboard = {
  namespaced: true,
  // 1、state：创建初始化状态
  state: {
    isCollapse: false // 是否折叠菜单栏
  },
  // 2、getters：提供外部获取state
  getters: {

  },
  // 3、mutations：创建改变状态的方法
  mutations: {
    CHANGE_COLLAPSE (state, { payload: { isCollapse } }) {
      state.isCollapse = isCollapse
    }

  },
  // 4、actions：创建驱动方法改变mutations
  actions: {
    changeCollapse ({ commit }, isCollapse) {
      commit({
        type: 'CHANGE_COLLAPSE',
        payload: { isCollapse } })
    }

  }
}
export default dashboard
