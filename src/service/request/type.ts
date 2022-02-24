import type {AxiosRequestConfig,AxiosResponse} from 'axios'

export interface ZwRequestInterceptors{
  // 请求拦截器
  requestInterceptor:(interceptor:AxiosRequestConfig)=> AxiosRequestConfig,
  requestInterceptorCatch:(error:any)=> any,
  // 响应拦截器
  responseInterceptor:(interceptor:AxiosResponse)=> AxiosResponse,
  responseInterceptorCatch:(error:any)=> any,
}

export interface ZwRequestConfig extends AxiosRequestConfig{
  interceptors?:ZwRequestInterceptors
}

export interface IDataType<T = any> {
  code:number,
  data:T
} 