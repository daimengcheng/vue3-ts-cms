import {ElButton,ElAlert,ElMessage } from 'element-plus'
import { App } from 'vue'

const components:any = [ElButton,ElAlert,ElMessage]

export function registerElement(app:App){
  for(const component of components){
    app.component(component.name,component)
  }
}