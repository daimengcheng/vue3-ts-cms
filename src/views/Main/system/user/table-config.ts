
import {ITableConfig} from  '@/base-ui/table/type'

const userTableConfig:ITableConfig = {
  propsItem: [
    { prop: "name",label:"用户名"},
    { prop: "realname",label:"真实姓名"},
    { prop: "enable",label:"状态"  ,slotName:"status"},
    {prop:"cellphone",label:"电话号码"},
    { prop: "createAt",label:"创建时间" ,slotName:"createAt" },
    { prop: "updateAt",label:"更新时间"  ,slotName:"updateAt"},
    { prop:"option",label:"操作"  ,slotName:"option"}
  ],
  showColumnIndex:false,
  showColumnSelect: true,
  title:"用户列表"
}

export {userTableConfig }