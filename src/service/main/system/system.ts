import request from '../../index'
import {IUserQuery} from './type'
import {IResult} from "../../type"
// 获取用户列表
export const getUserList = (url:string,queryInfo:IUserQuery)=>{
  return request.post<IResult>({url,data:queryInfo})
}