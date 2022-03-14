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
