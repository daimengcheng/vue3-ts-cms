import { App } from 'vue'
import {Monitor,Fold,Expand,ArrowRight, Search} from  "@element-plus/icons-vue"
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
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard,
  ElCol,
  ElRow,
  ElTable,
  ElTableColumn
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
  Monitor,
  Fold,
  Expand,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ArrowRight,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard,
  ElCol,
  ElRow,
  Search,
  ElTable,
  ElTableColumn
]

export function registerElement(app:App){
  for(const component of components){
    app.component(component.name,component)
  }
}