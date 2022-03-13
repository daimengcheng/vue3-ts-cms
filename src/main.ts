import { createApp } from 'vue'
import App from './App.vue'
import router from  './router/index'
import store from './store/index'
import registerApp from './global'
import {setupState} from '@/store/index'
import {ElMessageBox,ElMessage} from 'element-plus'
import "normalize.css"


const app = createApp(App)
// 按需注册element-plus组件
registerApp(app)
setupState()
app.use(router) // 流程: 执行install函数,获取当前路由的路径,去进行匹配
app.use(store) 

app.mount('#app')
