import request from '../../index'
import {IResult} from "../../type"
// 获取用户列表
export const getUserList = (url:string,queryInfo:any)=>{
  return request.post<IResult>({url,data:queryInfo})
}