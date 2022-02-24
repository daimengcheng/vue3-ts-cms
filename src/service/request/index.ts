import axios, { AxiosRequestConfig } from 'axios'
import type {AxiosInstance,AxiosResponse} from  'axios'
import type {ZwRequestConfig,ZwRequestInterceptors} from  './type'
import localCache from "@/utils/cache"


// 封装一个类
export class ZwRequest{

  instance:AxiosInstance
  // 拦截器
  interceptors?:ZwRequestInterceptors
  constructor(config:ZwRequestConfig){
    // axios实例对象
    this.instance = axios.create(config)

    // 保存传入的拦截器
    this.interceptors = config.interceptors

    //  实例化的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    ) 

    // 实例化对象的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      // 请求拦截成功的回调
      (config)=>{
        // 从store中取出token
      const token = localCache.getCache("token")
      if(token){
        config.headers!.Authorization = "Bearer "+token
      }
      return config
    },
    // 请求拦截失败的回调
    (err)=>{
      return err
    }
    )
    this.instance.interceptors.response.use(
      // 响应拦截成功的回调
      (res)=>{
        return res.data
      },
      (err)=>{
        return Promise.reject(err)
      }
    )
  }

  request<T= any>(config: AxiosRequestConfig):Promise<T>{
    return new Promise((resolve,reject)=>{
      this.instance.request<any,AxiosResponse<any,any>,any>(config)
      .then((res)=>{
        resolve((res as unknown) as Promise<T> )
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }
  get<T>(config: AxiosRequestConfig){
    return this.request<T>({...config,method:"GET"})
  }
  post<T>(config: AxiosRequestConfig){
    return this.request<T>({...config,method:"POST"})
  }
  delete<T>(config: AxiosRequestConfig){
    return this.request<T>({...config,method:"DELETE"})
  }
  patch<T>(config: AxiosRequestConfig){
    return this.request<T>({...config,method:"PATCH"})
  }
}

