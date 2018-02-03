import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



import mine from '../components/zengjian/mine'
import home from '../components/mingxiong/Home.vue'
import types from '../components/yaowu/types.vue'
//跳到商品列表

import list from '../components/yaowu/BarList.vue'
import cart from '../components/haizhou/cart.vue'
import RegistrationPage from '../components/yaowu/RegistrationPage.vue'
import BackPsd from '../components/yaowu/BackPsd.vue'


//跳到注册页面
//  导入One、Two 二级路由
import One from '../components/zengjian/One'
import Two from '../components/zengjian/Two'


export default new Router({
  mode: 'history',
  routes: [
    {path: '/mine', component: mine, children: [
      { path: '', component: One },
      { path: 'One', component: One },
      { path: 'Two', component: Two },
    ]},
    {path: '/home', component: home},
    {path: '', component: home},
    {path: '/types', component: types},
    {path: '/cart', component: cart},
    {path: '/list/:barName', component: list},
    {path: '/RegistrationPage', component: RegistrationPage},
    {path: '/BackPsd', component: BackPsd},
    
  ]
})
