import {createStore} from  'vuex'
import loginModule from './login/loginModule'
import systemModule from './main/system/systemModule'
import analysisModule from './main/analysis/analysisModule'
import {IRootState,rootState,IStore} from './types'
import {getPageList,getCurrentMenuListById} from '@/service/main/system/system'
import { IResult } from '@/service/type'
const store = createStore<IStore>({
  state(){
    return {
      departmentList:[],
      roleList:[],
      menuList:[],
      currentMenuList:[]
    }
  },
  mutations:{
    // 保存部门列表
    saveDepartmentList(state,departmentList){
      state.departmentList = departmentList
    },
    saveRoleList(state,roleList){
      state.roleList = roleList
    },
    saveMenuList(state,menuList){
      state.menuList = menuList
    },
    saveCurrentMenuList(state,currentMenuList){
      state.currentMenuList = currentMenuList
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
    },
    // 获取完整的菜单列表
    async getMenuListAction({commit}){
      const res = await getPageList("menu/list")
      commit("saveMenuList",res.data.list)
    },

    // 通过角色id获取该角色对应的菜单树
    async getCurrentMenuListByIdAction({commit},payload){
      const {roleId} = payload
      const url = `role/${roleId}/menu`
      console.log(url);
      const res:IResult = await getCurrentMenuListById(url)
      commit("saveCurrentMenuList",res.data)
    }
  },

  modules:{
    loginModule,
    systemModule,
    analysisModule
  },
  

})

export function setupState(){
  store.dispatch("loginModule/loadLocalState")
  // setupActiveMenu(activeMenu)
}

export default store