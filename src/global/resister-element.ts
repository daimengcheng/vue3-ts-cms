import {ElButton,ElAlert,ElMessage, ElForm, ElFormItem,ElInput,ElCheckbox,ElLink} from 'element-plus'
import { App } from 'vue'

const components:any = [ElButton,ElAlert,ElMessage,ElForm, ElFormItem,ElInput,ElCheckbox,ElLink]

export function registerElement(app:App){
  for(const component of components){
    app.component(component.name,component)
  }
}