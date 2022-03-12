import { Module } from "vuex";
import ILoginState from './types'
import rootState from '../types'
import {reqAccountLogin,reqUserInfoById,reqMenuByUserId} from '@/service/login/login'
import {AccountLoginType} from '@/service/login/types'
import {getRoute} from '@/utils/map-route-menu'
import {mapMenuPermission} from '@/utils/mapMenuPermission'
import localCache from '@/utils/cache'
import router from '@/router/index'
const loginModule:Module<ILoginState,rootState> = {
  namespaced:true,
  state:{
    token:"",
    userInfo:{},
    menuList:[],
    activeMenu:"",
    menuPermissions:[]
  },
  mutations:{
    // 保存token以及id
    saveToken(state,token:string){
      state.token = token
    },
    // 保存用户信息
    saveUserInfo(state,userInfo:any){
      state.userInfo = userInfo
    },
    // 保存角色菜单列表
    saveMenuList(state,menuList){
      state.menuList = menuList
      const routes = (getRoute(menuList))
      routes.forEach((route)=>{
          router.addRoute("main",route)                                                                                           
      })
      state.menuPermissions = mapMenuPermission(menuList);
    },

    // 保存当前激活的菜单
    saveActiveMenu(state,activeMenu){
      state.activeMenu = activeMenu
    }
  },
  actions:{
    // 发起账号登录请求
    async accountLoginAction({commit},payload:AccountLoginType){
      const res:any = await reqAccountLogin(payload)
      commit("saveToken",res.data.token)
      localCache.setCache("token",res.data.token)
      // 根据id获取用户信息
      const resUser:any = await reqUserInfoById(res.data.id)
      commit("saveUserInfo",resUser.data)
      localCache.setCache("userInfo",resUser.data)
      // 根绝用户id获取角色菜单列表
      const resMenu = await reqMenuByUserId(resUser.data.id)
      commit("saveMenuList",resMenu.data)
      localCache.setCache("menuList",resMenu.data)
      // 路由跳转
      router.push("/main")
    },
    loadLocalState({commit}){
      const token = localCache.getCache("token")
      if(token){
        commit("saveToken",token)
      }
      const userInfo = localCache.getCache("userInfo")
      if(userInfo){
        commit("saveUserInfo",userInfo)
      }
      const menuList = localCache.getCache("menuList")
      if(menuList){
        commit("saveMenuList",menuList)
      }
    }
  },
  getters:{}
}

export default loginModule