import {ZwRequest} from  './request/index'

// 实例化对象
const request = new ZwRequest({
  baseURL:"http://152.136.185.210:5000",
  timeout:20000,
})

export default request
