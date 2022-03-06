import {createStore} from  'vuex'
import loginModule from './login/loginModule'
import systemModule from './main/system/systemModule'
const store = createStore({
  modules:{
    loginModule,
    systemModule
  }
})

export function setupState(){
  store.dispatch("loginModule/loadLocalState")
  // setupActiveMenu(activeMenu)
}

export default store