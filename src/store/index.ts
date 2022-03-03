import {createStore} from  'vuex'
import loginModule from './login/loginModule'
const store = createStore({
  modules:{
    loginModule
  }
})

function setupActiveMenu(activeMenu:string):void{

}

export function setupState(){
  store.dispatch("loginModule/loadLocalState")
  // setupActiveMenu(activeMenu)
}

export default store