import {createStore} from  'vuex'
import loginModule from './login/loginModule'
const store = createStore({
  state(){
    return{
      name:"xiaocheng"
    }
  }
})

export default store