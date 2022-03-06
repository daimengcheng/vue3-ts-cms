import {ITableConfig} from '@/base-ui/table/type'

const roleTableConfig:ITableConfig = {
  showColumnSelect:true,
  showColumnIndex:false,
  title:"角色列表",
  propsItem:[
    { prop: 'name', label: '角色名称', },
    { prop: 'intro', label: '角色权限',},
    { prop: 'createAt', label: '创建时间',slotName:"createAt"},
    { prop: 'updateAt', label: '更新时间',slotName:"updateAt"},
    { label: '操作',slotName:"option" }
  ]
}

export {roleTableConfig}