import request from '../index'
import {AccountLoginType} from './types'
import {IDataType} from '../request/type'

// enum reqUrl = [
//   "/login", //登录的url
//   "/users/",//获取用户信息,
//   "//role/4/menu/",//获取角色菜单树
// ]

// 账号登录
export const reqAccountLogin = (account:AccountLoginType)=>request.post<IDataType>({url:'/login',data:account}) 

// 用过id获取角色信息
export const reqUserInfoById = (id:number)=>request.get({url:`/users/${id}`})

// 通过用户id获取角色菜单列表
export const reqMenuByUserId = (id:number)=> request.get<IDataType>({url:`/role/${id}/menu`})