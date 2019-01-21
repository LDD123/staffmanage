// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入model
import login from './models/login/index.js'
// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  models: {
    login: login
  }
})
