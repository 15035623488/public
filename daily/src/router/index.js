import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import HelloWorld from '@/components/HelloWorld'
import found from '@/components/found'
import my from '@/components/my'
import classification from '@/components/classification'
import shopping from '@/components/shoppingCart'
import Login from '@/components/Login'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import Sou from '@/components/Sou'
import zhifu from '@/components/123/zhifu'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/Sou',
      name:'/Sou',
      component:Sou
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/found',
      name: 'found',
      component: found,
      redirect:"/one",
      children:[
        {path:'/one',name:'one',component:one},
        {path:'/two',name:'two',component:two},
        {path:'/three',name:'three',component:three},
        {path:'/four',name:'four',component:four}
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shopping
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    }

  ]
})
