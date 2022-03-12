import {IForm} from '@/base-ui/form/types'
const roleSearchConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    {
      field:"name",
      label:"角色名称",
      type:"input",
    },
    {
      field:"intro",
      label:"角色权限",
      type:"input"
    },
    {
      field:"createAt",
      label:"创建日期",
      type:"datePicker",
    }, 
  ],
  colLayout:{span:8}
}
export {roleSearchConfig}