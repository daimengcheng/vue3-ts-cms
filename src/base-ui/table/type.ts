interface IPropsItem{
  prop?:string,
  label:string
  slotName?:string
}

interface ITableConfig {
  showColumnIndex:boolean,
  showColumnSelect:boolean,
  propsItem:IPropsItem[],
  title:string
}

export {ITableConfig,IPropsItem}