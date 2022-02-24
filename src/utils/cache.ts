// 定义一个用于浏览器本地缓存的类

class Cache{
  // 保存
  setCache(key:string,value:any){
    window.localStorage.setItem(key,JSON.stringify(value))
  }
  // 从浏览器中取出某个缓存的属性
  getCache(key:string){
    const value = window.localStorage.getItem(key)
    if(value) return JSON.parse(value)
    else return ""
  }
  // 删除某个特定的属性
  deletecache(key:string){
    window.localStorage.removeItem(key)
  }
  // 清空localStorage
  clearCache(){
    window.localStorage.clear()
  }
}

export default new Cache()