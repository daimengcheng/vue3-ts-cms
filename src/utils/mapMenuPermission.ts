
function mapMenuPermission(menuList:any){

  // 存放该用户的权限
  const permissions:any = []

  const _recursionGetPermission = (menuList:any)=>{
    for (const menu of menuList) {
      if(menu.type === 1 || menu.type === 2){
        _recursionGetPermission(menu.children??[])
      }else{
        permissions.push(menu.permission)
      }
    }
  }
  _recursionGetPermission(menuList)
  return permissions
}

function mapMenuToLeafId(menuList:any){

  const leafId:number[] = []
  const _recursionGetLeafId = (menuList:any)=>{
    menuList.map((menu:any)=>{
      if(menu.children){
        _recursionGetLeafId(menu.children)
      }else{
        leafId.push(menu.id)
      }
    })
  }
  _recursionGetLeafId(menuList)
  return leafId
}

export {mapMenuPermission,mapMenuToLeafId}