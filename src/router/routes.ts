import {RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },{
    path:"/login",
    component:()=>import("@/views/Login/login.vue")
  },
  {
    path:"/main",
    component:()=>import("@/views/Main/main.vue")
  }
]
export default routes