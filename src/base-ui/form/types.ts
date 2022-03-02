
export type ItemType = 'input' | 'password' | 'select' | 'datePicker'

interface SelectOptions{
  value:string,
  label:string
}
export interface FormItemOptions{
  label:string, 
  type:string, //用于判断输入框的类型,
  rules?:any[], // 校验规则
  selectOptions?:SelectOptions[], //选择框的数据
}

export interface IForm{
  labelWidth: string,
  formData:FormItemOptions,
  colLayout:any
}