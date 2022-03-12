

//  返回 该角色是否拥有某个权限
import store from '@/store'

function useRolePermission(pageName:string,permissionName:string){
  // 该角色所有的权限 
  const menuPermissions = store.state.loginModule.menuPermissions

  const handlePermission = `system:${pageName}:${permissionName}`

  return !!menuPermissions.find((permission)=>permission===handlePermission);
}

export {useRolePermission}