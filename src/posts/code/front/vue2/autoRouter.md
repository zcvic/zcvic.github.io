---
icon: router
date: 2024-05-29
category:
  - 代码笔记
  - 前端
  - vue2
tag:
  - router
---
# vue2自动路由

每次在views下添加页面后，都需要去配置路由，总是手动去设置，会比较麻烦

于是研究了一下根据目录结构自动生成路由，这样在views下添加文件之后就会自动生成路由了

首先查看需要的路由结构

```jsx
const routes = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('@/views/index.vue')
            }, {
                path: '/test',
                name: 'test',
                component: () => import('@/views/test/index.vue')
            },{
                path: '/test/index',
                name: 'test-test',
                component: () => import('@/views/test/test.vue')
            }
        ]
    },
]
```

首先通过webpack的require.context

获取目录路径

```jsx
const glob = require.context('@/views', true, /\.vue$/)
```

![目录路径](/assets/images/code/front/vue2/autoRouter/msedge_imI87VaU7Y.png)

首先删除尾部的.vue 通过.slice(0, -4)

然后通过分割/再次拼接即可获得需要的路径

我这里判断了index的情况

```jsx
const pages = glob.keys().map(item => {
  const name = item.slice(0, -4)
  const x = name.split('/')
  const page = {}
  if (x.length == 2) {
    if(x[1]=='index'){
      page.path = ``
      page.name = 'index'
    }else{
      page.path = `/${x[1]}`
      page.name = x[1]
    }
  } else {
    if (x[2] == 'index') {
      page.path = `/${x[1]}`
      page.name = x[1]
    } else {
      page.path = `/${x[1]}/${x[2]}`
      page.name = x[1] + '-' + x[2]
    }
  }
  page.component = glob(item).default
  return page
})
```

## 具体实现

项目目录结构

```jsx
├── src
│    ├── router
│        ├── index.js
│    ├── layout
│        ├── index.vue
│    ├── views
│        ├── test
│            ├── index.vue
│            ├── test.vue
│        ├── user
│            ├── index.vue
│            ├── user.vue
│        ├── index.vue
│    ├── App.vue
│    ├── main.js
└── vue.config.js
```

router/index.js

```jsx
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const glob = require.context('@/views', true, /\.vue$/)
const pages = glob.keys().map(item => {
  const name = item.slice(0, -4)
  const x = name.split('/')
  const page = {}
  if (x.length == 2) {
    if(x[1]=='index'){
      page.path = ``
      page.name = 'index'
    }else{
      page.path = `/${x[1]}`
      page.name = x[1]
    }
  } else {
    if (x[2] == 'index') {
      page.path = `/${x[1]}`
      page.name = x[1]
    } else {
      page.path = `/${x[1]}/${x[2]}`
      page.name = x[1] + '-' + x[2]
    }
  }
  page.component = glob(item).default
  return page
})
const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: pages
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

layout/index.vue

这是只是示范 因为有一层children，所以需要一个<router-view /> 其他的自行修改

```jsx
<template>
  <div>
    <div style="margin: 50px auto;">
        layout
    </div>
    <router-view />
  </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            
        }
    }
  
</script>

<style scoped>
  
</style>
```

main.js

```jsx
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

app.vue

```jsx
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```

效果图：

layout的内容一直在页面中

切换路由切换的是\<router-view \/>

![路由效果图](/assets/images/code/front/vue2/autoRouter/msedge_TMX8yb4QGf.png)

![路由效果图](/assets/images/code/front/vue2/autoRouter/msedge_zAbic5S7Ez.png)