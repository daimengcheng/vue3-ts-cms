interface IPropsItem{
  prop?:string,
  label:string
  slotName?:string
}

interface ITableConfig {
  showColumnIndex:boolean,
  showColumnSelect:boolean,
  propsItem:IPropsItem[],
  title:string,
  childrenProps?:{},
  hidePagination?:boolean
}

export {ITableConfig,IPropsItem}