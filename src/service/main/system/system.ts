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

// 查询每个分类商品的数量
export const getCategoryGoodsCount =(url:string)=>{
  return request.get<IResult>({url})
}

 // 查询每个分类商品的销量
export const getCategoryGoodsSale =(url:string)=>{
  return request.get<IResult>({url})
}

 // 查询每个分类商品的收藏量
 export const getCategoryGoodsFavor=(url:string)=>{
  return request.get<IResult>({url})
}

// 查询不同城市的销量数据
export const getCitySaleCount=(url:string)=>{
  return request.get<IResult>({url})
}

// 商品数据统计数量 的数量
export const getGoodsAmountList = (url:string)=>{
  return request.get<IResult>({url})
}

// 查询销量前十的商品数量
export const getGoodsCountTop = (url:string)=>{
  return request.get<IResult>({url})
}