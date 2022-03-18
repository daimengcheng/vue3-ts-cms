import {Module} from "vuex"
import {IRootState} from "../../types"
import {IUserState} from './type'
import {getPageList,deleteById,createNew,editUserByID} from '@/service/main/system/system'
import {IResult} from '@/service/type'
import {firstToUpper} from '@/utils/firstToUpper'
const systemModule:Module<IUserState,IRootState> = {
  namespaced:true,
  state(){
    return{
      userCount:0,
      userList:[],
      roleCount:0,
      roleList:[],
      goodsCount:0,
      goodsList:[],
      menuCount:0,
      menuList:[]
    }
  },
  mutations:{
    // 保存用户 列表
    saveUsersList(state,userList){
      state.userList = userList
    },
    // 保存用户总数
    saveUsersCount(state,userCount){
      state.userCount = userCount
    },
    // 保存角色 列表
    saveRoleList(state,roleList){
      state.roleList = roleList
    },
    // 保存角色总数
    saveRoleCount(state,roleCount){
      state.roleCount = roleCount
    },
    // 保存商品 列表
    saveGoodsList(state,goodsList){
      state.goodsList = goodsList
    },
    // 保存角色总数
    saveGoodsCount(state,goodsCount){
      state.goodsCount = goodsCount
    },
    // 保存菜单 列表
    saveMenuList(state,menuList){
      state.menuList = menuList
    },
    // 保存角色总数
    saveMenuCount(state,menuCount){
      console.log(menuCount);
      state.menuCount = menuCount
    }
  },
  getters:{},
  actions:{
    // 获取数据列表
    async getListAction({commit},payload){
      const {queryInfo,pageName} = payload
      // 拼接新的url
      const pageUrl = `${pageName}/list`
      const res:IResult = await getPageList(pageUrl,queryInfo?queryInfo:{})
      // 首字母大写
      const newPageName = firstToUpper(pageName)
      if(res.data.totalCount){
        commit(`save${newPageName}Count`,res.data.totalCount)
      }
      commit(`save${newPageName}List`,res.data.list)
    },

    // 通过id删除
    async deleteByIdAction({dispatch},payload){
      const {pageName,id,queryInfo} = payload
      const url = `${pageName}/${id}`
      await deleteById(url)

      // 重新获取列表
      dispatch("getListAction",{pageName,queryInfo})
    },

    // 新建用户
    async createNewAction(context,payload){
      const {pageName,queryInfo} = payload
      const url = `${pageName}`
      const res:IResult = await createNew(url,queryInfo)
      if(res.code === 0){
        // 请求成功, 重新获取列表数据
        context.dispatch("getListAction",{pageName})
      }
    },
    
    // 编辑用户
    async editAction(context,payload){
      const {pageName,queryInfo,id} = payload
      const url = `${pageName}/${id}`
      const res:IResult = await editUserByID(url,queryInfo)
      console.log(res);
    }
  }
}

export default systemModule
