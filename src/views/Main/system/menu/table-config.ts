
import {ITableConfig} from  '@/base-ui/table/type'

const menuTableConfig:ITableConfig = {
  propsItem: [
    { prop: 'name', label: '菜单名称' },
    { prop: 'type', label: '级别', },
    { prop: 'url', label: '菜单url', },
    { prop: 'icon', label: '菜单icon', },
    { prop: 'sort', label: '排序', },
    { prop: 'permission', label: '权限',},
    { prop: 'createAt', label: '创建时间', slotName: 'create' },
    { prop: 'updateAt', label: '更新时间', slotName: 'update' },
    { prop:"option",label: '操作', slotName: 'option' }
  ],
  showColumnIndex:false,
  showColumnSelect: false,
  title:"菜单列表",
  childrenProps:{
    rowKey:"id",
    treeProp:{
      children:'children',
    }
  },
  hidePagination:true
}

export {menuTableConfig }