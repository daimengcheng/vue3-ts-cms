
import {ITableConfig} from  '@/base-ui/table/type'

const userTableConfig:ITableConfig = {
  propsItem: [
    { prop: "id" ,label:"用户ID"},
    { prop: "name",label:"用户名"},
    { prop: "realname",label:"真实姓名"},
    { prop: "enable",label:"状态"  ,slotName:"status"},
    { prop: "createAt",label:"创建时间" ,slotName:"createAt" },
    { prop: "updateAt",label:"更新时间"  ,slotName:"updateAt"},
    { label:"操作"  ,slotName:"option"}
  ],
  showColumnIndex:false,
  showColumnSelect: true,
  title:"用户列表"
}

export {userTableConfig }