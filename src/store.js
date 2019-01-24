// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入model
import login from './models/login/index.js'
import dashboard from './models/dashboard/index.js'
// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    dashboard
  }
})
