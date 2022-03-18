import {IForm} from '@/base-ui/form/types'

const roleModelConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    { label: "角色名", type: "input",field:"name" },
    {label:"介绍",type:"input",field:"intro"},
  ],
  colLayout:{span:24},
  showBtns:false,
}
export {roleModelConfig}