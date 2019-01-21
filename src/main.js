import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/iconfonts/iconfont.css'
import { Form, FormItem, Button, Input, Notification } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$notify = Notification
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
