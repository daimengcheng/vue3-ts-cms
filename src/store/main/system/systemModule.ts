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
      userList:[]
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
    }
  },
  actions:{
    // 获取用户列表
    async getUserListAction({commit},payload){
      const res:IResult = await getUserList(payload.url,payload.queryInfo)
       commit("saveUserList",res.data.list)
       commit("saveUserCount",res.data.totalCount)
    }
  }
}

export default systemModule
