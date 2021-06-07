// 整个项目的入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
// 全局样式表
import './assets/css/global.css'

// 配置路由根路径
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://192.168.43.215:5000/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
