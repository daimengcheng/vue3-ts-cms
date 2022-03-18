import request from '../../index'
import {IResult} from "../../type"
// 获取用户列表
export const getPageList = (url:string,queryInfo={})=>{
  return request.post<IResult>({url,data:queryInfo})
}

// 通过id删除
export const deleteById = (url:string)=>{
  return request.delete<IResult>({url})
}

// 新建用户
export const createNew = (url:string,newData:any={})=>{
  return request.post<IResult>({url,data:newData})
}

// 通过id修改用户
export const editUserByID = (url:string,newData:any)=>{
  return request.patch<IResult>({url,data:newData})
}

// 通过角色id获取该角色的菜单树
export const getCurrentMenuListById = (url:string)=>{
  return request.get<IResult>({url})
}