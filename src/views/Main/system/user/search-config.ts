//  用于配置form组件

import {IForm} from '@/base-ui/form/types'

const searchFormConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    { label: "账号", type: "input",field:"name" },
    { label:"请输入真实姓名", type:"input", field:"realname"},
    {
      label: "状态",
      type: "select",
      field:"selectValue",
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
    { label: "创建时间", type: "datePicker",field:"createTime" },
    {label:"电话号码", type:"input", field:"phoneNumber"}
  ],
  colLayout:{span:8}
}
export {searchFormConfig}