// 将字符串首字母转大写

function firstToUpper(string:string){
  return string.charAt(0).toLocaleUpperCase() + string.slice(1)
}

export {firstToUpper}