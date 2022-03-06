//  用于配置form组件

import {IForm} from '@/base-ui/form/types'

const searchFormConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    { label: "账号", type: "input",field:"name" },
    { label: "密码", type: "password",field:"password" },
    {
      label: "请选择喜欢的运动",
      type: "select",
      field:"selectValue",
      selectOptions: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    },
    { label: "请选择日期范围", type: "datePicker",field:"createTime" },
  ],
  colLayout:{span:8}
}
export {searchFormConfig}