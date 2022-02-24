import { createApp } from 'vue'
import App from './App.vue'

import router from  './router/index'
import store from './store/index'
import registerApp from './global'
import {setupState} from '@/store/index'
import "normalize.css"


const app = createApp(App)
// 按需注册element-plus组件
registerApp(app)
app.use(router)
app.use(store)

setupState()

app.mount('#app')
