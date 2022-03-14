import {IForm} from '@/base-ui/form/types'

const modalConfig:IForm = {
  labelWidth:"120px",
  formItems:[
    { label: "用户名", type: "input",field:"name" },
    { label:"真实姓名", type:"input", field:"realname"},
    {label:"电话号码", type:"input", field:"cellphone"},
    {label:"密码",type:"input",field:"password",isHidden:true},
    {label:"部门",type:"select",field:"departmentId",selectOptions:[]},
    {label:"角色",type:"select",field:"roleId",selectOptions:[]}
  ],
  colLayout:{span:24},
  showBtns:false,
}
export {modalConfig}