interface IPropsItem{
  prop:string,
  label:string
}

interface IUserTableConfig {
  showColumnIndex:boolean,
  showColumnBtn:boolean,
  propsItem:IPropsItem[],
}

export {IUserTableConfig,IPropsItem}