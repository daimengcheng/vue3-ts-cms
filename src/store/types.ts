import loginState from './login/types'
import {IUserState} from './main/system/type'

interface IRootState {
  departmentList:any[],
  roleList:any[],
  menuList:any[],
  currentMenuList:[],
  loginModule?:loginState,
  systemModule?:IUserState,
}


interface rootState extends IRootState{
  loginModule:loginState,
  systemModule:IUserState,
}

type IStore = IRootState & rootState
export {IRootState,IStore,rootState}