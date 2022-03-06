
import {IUserTableConfig} from  '@/base-ui/table/type'

const userTableConfig:IUserTableConfig = {
  propsItem: [
    { prop: "id" ,label:"用户ID"},
    { prop: "name",label:"用户名" },
    { prop: "realname",label:"真实姓名" },
    { prop: "enable",label:"状态" },
    { prop: "createAt",label:"创建时间" },
    { prop: "updateAt",label:"更新时间" },
  ],
  showColumnIndex:false,
  showColumnBtn: true,
}

export {userTableConfig}