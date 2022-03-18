import { IForm } from "@/base-ui/form/types";

export const goodsSearchConfig:IForm = {
  labelWidth:"120px",
  colLayout:{span:8},
  formItems:[
    {
      label:"商品名称",type:"input",field:"name",
    },
    {
      label:"商品价格",type:"input",field:"newprice",
    },
    {
      label:"状态",type:"select",field:"status",
      selectOptions:[
        {
          value:"1",
          label:"启用"
        },
       {
        value:"0",
        label:"禁止"
       },
      ]
    },
    {
      label:"创建时间",type:"dataPicker",field:"createAt"
    }
  ],
  showBtns:true
}