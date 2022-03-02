import {RouteRecordRaw} from 'vue-router'

export function getRoute(menuList:any):RouteRecordRaw[]{

  const routes:RouteRecordRaw[] = []
  // 1. 获取本地所有的route
  const allRoutes:RouteRecordRaw[] = []
  // 获取到了所有路由映射文件的路径
  const routeFiles = import.meta.globEager("../router/main/**/*.ts")
  
  Object.values(routeFiles).forEach((file)=>{
    allRoutes.push(file.default)
  })

  // 2. 菜单的映射
  const _recurseGetRoute = (menus:any[])=>{
    for(const menu of menus){
      if(menu.type === 2){
        const route = allRoutes.find((item)=>item.path === menu.url)
        if(route){
          routes.push(route)
        }
      }else{
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(menuList)
  return routes
}