import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './routes'
import localCache from '@/utils/cache'

const router = createRouter({
  routes,
  history:createWebHashHistory()
})

router.beforeEach((to)=>{
  if(to.path !=="/login"){
    const token = localCache.getCache("token")
    if(!token){
      return "/login"
    }
    console.log(router.getRoutes());
  }
})

export default router