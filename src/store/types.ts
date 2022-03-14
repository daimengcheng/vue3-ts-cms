import loginState from './login/types'
import {IUserState} from './main/system/type'

interface IRootState {
  departmentList:any[],
  roleList:any[]
}


interface rootState{
  loginModule:loginState,
  systemModule:IUserState,
}

type IStore = IRootState & rootState
export {IRootState,IStore,rootState}