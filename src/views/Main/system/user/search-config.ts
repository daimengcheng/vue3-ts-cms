//  用于配置form组件

import {IForm} from '@/base-ui/form/types'

const searchFormConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    { label: "用户名", type: "input",field:"name" },
    { label:"真实姓名", type:"input", field:"realname"},
    {label:"电话号码", type:"input", field:"cellphone"},
    {
      label: "状态",
      type: "select",
      field:"enable",
      selectOptions: [
        {
          label: "启用",
          value: 1,
        },
        {
          value: 0,
          label: "禁用",
        }
      ],
    },
    { label: "创建时间", type: "datePicker",field:"createAt" },
  ],
  colLayout:{span:8}
}
export {searchFormConfig}