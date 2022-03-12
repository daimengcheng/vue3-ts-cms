
import {ITableConfig} from  '@/base-ui/table/type'

const goodsTableConfig:ITableConfig = {
  propsItem: [
    { prop: "name",label:"商品名"},
    { prop: "desc",label:"商品介绍"},
    {prop:"image",label:"图片",slotName:"imgUrl"},
    {prop:"newPrice",label:"价格"},
    { prop: "enable",label:"状态"  ,slotName:"status"},
    {prop:"inventoryCount",label:"库存"},
    { prop: "createAt",label:"创建时间" ,slotName:"createAt" },
    { prop: "updateAt",label:"更新时间"  ,slotName:"updateAt"},
    { prop:"option",label:"操作"  ,slotName:"option"}
  ],
  showColumnIndex:false,
  showColumnSelect: false,
  title:"商品列表"
}

export {goodsTableConfig }