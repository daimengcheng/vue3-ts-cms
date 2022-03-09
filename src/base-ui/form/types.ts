
export type ItemType = 'input' | 'password' | 'select' | 'datePicker'

interface SelectOptions{
  label:string,
  value: any
}

export interface IFormData {
  [key:string]:any
}

export interface FormItemOptions{
  field:string,// 用于判断类型的字段 
  label:string, 
  type:string  , //用于判断输入框的类型,
  rules?:any[], // 校验规则
  selectOptions?:SelectOptions[], //选择框的数据
}

export interface IForm{
  labelWidth?: string,
  formItems?:FormItemOptions[]
  colLayout?:any
}