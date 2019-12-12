import Vue from 'vue'
import App from './app'
import store from './store/stroe'

// 设置vue 的提示功能关闭
Vue.config.productionTip = false;

// 声明当前组件的类型
App.mpType = 'app'

//将store对象放置到Vue原型上，确保每个实例都可使用它
Vue.prototype.$store = store

// 生成应用的实例
const app = new Vue(App)

//挂载整个应用
app.$mount()
