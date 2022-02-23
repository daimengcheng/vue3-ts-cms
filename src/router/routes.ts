import {RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },{
    path:"/login",
    component:()=>import("@/views/Login/login.vue")
  },
  {
    path:"/home",
    component:()=>import("@/views/Home/home.vue")
  }
]
export default routes