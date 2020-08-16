import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式表
import './styles/index.less'

// 加载 Vant 组件库
import Vant from 'vant'
// 加载 Vant 的全局样式
import 'vant/lib/index.css'
// 注册使用 Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
