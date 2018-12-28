import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Homepage from '@/components/Homepage'
import Homepage1 from '@/components/Homepage1'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import login from '@/components/login'
import Forgetpwd from '@/components/Forgetpwd'
import Register from '@/components/Register'
import Weather from '@/components/Weather'
// 要告诉 vue 使用 vueRouter
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Homepage1',
      name: 'Homepage1',
      component: Homepage1
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
          title:'登录',
          index:1
      }
    },
    {
      path: '/Forgetpwd',
      name: 'Forgetpwd',
      component:Forgetpwd,
      meta:{
          title:'忘记密码',
          index:2
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component:Register,
      meta:{
          title:'注册',
          index:3
      }
    },
    {
      path: '/Weather',
      name: 'Weather',
      component:Weather
    }
  ],
  mode:"history", //消除链接上的#号
  base:'',
})
