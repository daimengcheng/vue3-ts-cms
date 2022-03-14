import {createStore} from  'vuex'
import loginModule from './login/loginModule'
import systemModule from './main/system/systemModule'
import {IRootState,rootState,IStore} from './types'
import {getPageList} from '@/service/main/system/system'
import { IResult } from '@/service/type'
const store = createStore<IStore>({
  state(){
    return {
      departmentList:[],
      roleList:[]
    }
  },
  mutations:{
    // 保存部门列表
    saveDepartmentList(state,departmentList){
      state.departmentList = departmentList
    },
    saveRoleList(state,roleList){
      state.roleList = roleList
    }
  },
  actions:{
    // 发送菜单列表的请求
    async getDepartmentListAction({commit},payload){
      const res:IResult = await getPageList("department/list")
      
      commit("saveDepartmentList",res.data.list)
    },
    // 发起获取角色列表的请求
    async getRoleListAction({commit}){
      const res:IResult = await getPageList("role/list")
      commit("saveRoleList",res.data.list)
    }
  },

  modules:{
    loginModule,
    systemModule
  },
  

})

export function setupState(){
  store.dispatch("loginModule/loadLocalState")
  // setupActiveMenu(activeMenu)
}

export default store