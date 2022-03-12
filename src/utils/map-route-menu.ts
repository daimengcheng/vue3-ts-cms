import {RouteRecordRaw} from 'vue-router'


// 动态获取角色权限相关的路由
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
  const _recurseGetRoute = (menus:any=[])=>{
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

// 获取一级,二级菜单的name与url 用做于面包屑数据
export function routeMapBread(menuList:any,currentUrl:string){

  const breadCrumbData:any = []

  for (const menu of menuList) {
    if(menu.type === 1){
      const findMenu:any = routeMapBread(menu.children??[],currentUrl)
      if(findMenu){
        breadCrumbData.push({"name":menu.name,"path":menu.url})
        breadCrumbData.push({"name":findMenu.name,"path":findMenu.url})

        return breadCrumbData
      }
    }else if(menu.url === currentUrl && menu.type === 2){
      return menu
    }
  }
}
