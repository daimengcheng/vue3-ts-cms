import {Module} from "vuex"
import rootState from "../../types"
import {IUserState} from './type'
import {getUserList} from '@/service/main/system/system'
import {IResult} from '@/service/type'
const systemModule:Module<IUserState,rootState> = {
  namespaced:true,
  state(){
    return{
      userCount:0,
      userList:[],
      roleCount:0,
      roleList:[]
    }
  },
  mutations:{
    // 保存用户 列表
    saveUserList(state,userList){
      state.userList = userList
    },
    // 保存用户总数
    saveUserCount(state,userCount){
      state.userCount = userCount
    },
    // 保存角色 列表
    saveRoleList(state,roleList){
      state.roleList = roleList
    },
    // 保存角色总数
    saveRoleCount(state,roleCount){
      state.roleCount = roleCount
    }
  },
  actions:{
    // 获取用户列表
    async getListAction({commit},payload){
      const {queryInfo,pageName} = payload
      const pageUrl = `${pageName}/list`
      const res:IResult = await getUserList(pageUrl,queryInfo)
      switch(pageName){
        case "users":
          if(res.code === 0){
            commit("saveUserList",res.data.list)
            commit("saveUserCount",res.data.totalCount)
          }
          break;
        case "role":
          if(res.code === 0){
            commit("saveRoleList",res.data.list)
            commit("saveRoleCount",res.data.totalCount)
          }
      }
    }
  }
}

export default systemModule
