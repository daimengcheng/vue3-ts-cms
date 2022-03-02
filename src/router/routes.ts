import {RouteRecordRaw} from 'vue-router'
import store from "@/store";
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path:"/login",
    component:()=>import("@/views/Login/login.vue")
  },
  {
    path:"/main",
    name:"main",
    component:()=>import("@/views/Main/main.vue"),
  },
  {
    path:"/:pathMatch(.*)*",
    name:"not-found",
    component:()=>import("@/views/not-found/not-found.vue")
  }
]
export default routes