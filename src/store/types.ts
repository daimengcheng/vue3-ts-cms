import loginState from './login/types'
import {IUserState} from './main/system/type'
interface rootState{
  loginModule:loginState,
  systemModule:IUserState
}
export default rootState