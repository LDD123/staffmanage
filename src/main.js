import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/iconfonts/iconfont.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, { size: 'small', zIndex: 3000 })
// import { Form, FormItem, Button, Input, Notification, Menu, Container, Header,
//   Aside, Main,
//   Footer,
//   Submenu,
//   MenuItem,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   MenuItemGroup, Row,
//   Col } from 'element-ui'
// Vue.config.productionTip = false
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Main)
// Vue.use(Footer)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.prototype.$notify = Notification
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
