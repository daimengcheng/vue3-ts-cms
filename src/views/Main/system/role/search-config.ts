import {IForm} from '@/base-ui/form/types'
const roleSearchConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    {
      field:"name",
      label:"姓名",
      type:"input",
    },
    {
      field:"intro",
      label:"角色权限",
      type:"input"
    },
    {
      field:"createTime",
      label:"请选择日期范围",
      type:"datePicker",
    }, 
  ],
  colLayout:{span:8}
}
export {roleSearchConfig}