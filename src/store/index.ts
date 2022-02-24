import {createStore} from  'vuex'
import loginModule from './login/loginModule'
const store = createStore({
  modules:{
    loginModule
  }
})


export function setupState(){
  store.dispatch("loginModule/loadLocalState")
}

export default store