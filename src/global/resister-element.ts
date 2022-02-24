import { App } from 'vue'
import {
  ElButton,
  ElAlert,
  ElMessage, 
  ElForm, 
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
} from 'element-plus'

const components:any = [
  ElButton,
  ElAlert,
  ElMessage,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
]

export function registerElement(app:App){
  for(const component of components){
    app.component(component.name,component)
  }
}