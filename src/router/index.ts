import {createRouter,createWebHashHistory, RouteLocationNormalized} from 'vue-router'
import routes from './routes'
import localCache from '@/utils/cache'
const router = createRouter({
  routes,
  history:createWebHashHistory()
})

router.beforeEach((to:RouteLocationNormalized)=>{
  if(to.path !=="/login"){
    const token = localCache.getCache("token")
    if(!token){
      return "/login"
    }
    if(to.path === "/main"){
      localCache.setCache("activeMenu","/main/analysis/overview")
      
    }else{
      localCache.setCache("activeMenu",to.path)
    }
  }
})

export default router