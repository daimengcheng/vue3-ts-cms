import {ZwRequest} from  './request/index'

// 实例化对象
const request = new ZwRequest({
  baseURL:"http://localhost:3001/",
  timeout:1000,
  // interceptors:{
  //   requestInterceptor:(config)=> {
  //     console.log("请求拦截器");
  //    return config
  //   },
  //   requestInterceptorCatch:(err)=>err,
  //   responseInterceptor:(res)=>{
  //     console.log("响应拦截器");
  //    return res
  //   },
  //   responseInterceptorCatch:(err)=>err
  // }
})

export default request
