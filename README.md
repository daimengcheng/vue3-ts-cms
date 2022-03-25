# 1. 问题一: 如何实现动态路由(权限管理)

	#### 1.  vite中动态引入 import.meta.globEager()

#### 2. 通过角色权限来实现动态注册路由

​	

```js
import {RouteRecordRaw} from 'vue-router'

export function getRoute(menuList:any):RouteRecordRaw[]{

  const routes:RouteRecordRaw[] = []
  // 1. 获取本地所有的route
  const allRoutes:RouteRecordRaw[] = []
  // 获取到了所有路由映射文件的路径
  const routeFiles = import.meta.globEager("../router/main/**/*.ts")
  
  Object.values(routeFiles).forEach((file)=>{
    allRoutes.push(file.default)
  })

  // 2. 菜单的映射
  const _recurseGetRoute = (menus:any[])=>{
    for(const menu of menus){
      if(menu.type === 2){
        const route = allRoutes.find((item)=>item.path === menu.url)
        if(route){
          routes.push(route)
        }
      }else{
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(menuList)
  return routes
}
```



#### 3. 动态添加子路由

```javascript
// 一定要注意给父路由name属性赋值

router.addRoute("父路由的name",{要添加的路由})
```

#### 4. 关于点击刷新以后会出现路由匹配不到的问题

##### 原因:

​	1. 先进行了路由注册:app.use(router) ,执行install函数,获取当前路由的路径,去进行匹配,但是当前的路由中还没有进行注册,因此匹配到了404, 再调用了注册动态路由的方法,此时才进行了路由注册,然后匹配到了404的路径

##### 解决方法

​	改变顺序

```js
const app = createApp(App)
// 按需注册element-plus组件
registerApp(app)
setupState()  // 调用注册动态路由的方法
app.use(router) // 流程: 执行install函数,获取当前路由的路径,去进行匹配
app.use(store) 


app.mount('#app')


```

#### 5. 给封装的form组件中的input组件绑定value等的问题, 违反vue中单向数据流的设定

解决方法

```js
<CzFromSearch v-bind="searchFormConfig" v-model="formData" />  //使用v-model实现自定义组件双向数据绑定
```

```js
props:{  // 在props中定义,接收传入的数据
    modelValue: {
        type: Object,
        default: () => ({}),
    },
}

emits: ["update:modelValue"],
setup(props, { emit }) {
 	const formData = ref({ ...props.modelValue })
    watch(
      formData,
      newVal => {
        console.log(newVal)
        emit("update:modelValue", newVal) // 修改父组件中的formData
      },
      { deep: true }
    )
```



# 2. 注意事项

####  1. 在vue3和ts的结合中,props中接收的数据如果是一个对象或者数组的话,那么它的默认值必须定义在一个箭头函数中

​	

#### 2. 使用echarts时,关于使用哪种渲染器的问题

###### 	1. 如果数据量不大,渲染的图表不复杂时,选择svg  {render:"svg"}

###### 	2. 数据量过大,选择canvas性能更好.

​    

