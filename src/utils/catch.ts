// 定义一个用于浏览器本地缓存的类

class Catch{
  // 保存
  setCatch(key:string,value:any){
    window.localStorage.setItem(key,JSON.stringify(value))
  }
  // 从浏览器中取出某个缓存的属性
  getCatch(key:string){
    const value = window.localStorage.getItem(key)
    if(value) return JSON.parse(value)
    else return ""
  }
  // 删除某个特定的属性
  deleteCatch(key:string){
    window.localStorage.removeItem(key)
  }
  // 清空localStorage
  clearCatch(){
    window.localStorage.clear()
  }
}

export default new Catch()