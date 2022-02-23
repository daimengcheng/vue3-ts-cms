import { createApp } from 'vue'
import App from './App.vue'

import router from  './router/index'
import store from './store'
import registerApp from './global'

import "normalize.css"


const app = createApp(App)
// 按需注册element-plus组件
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
