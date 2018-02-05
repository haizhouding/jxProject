import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



import mine from '../components/zengjian/mine'
import home from '../components/mingxiong/Home.vue'
import types from '../components/yaowu/types.vue'
import details from '../components/haizhou/details.vue'
//跳到商品列表

import list from '../components/yaowu/BarList.vue'
import cart from '../components/haizhou/cart.vue'




//跳到注册页面
//  导入One、Two 二级路由
import One from '../components/zengjian/One'
import Two from '../components/zengjian/Two'

import contents from '../components/haizhou/contents.vue'
import province from '../components/haizhou/province.vue'
import city from '../components/haizhou/city.vue'
import county from '../components/haizhou/county.vue'






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
    {path: '/details', component: details, children: [
      {path:'', component: contents},
      {path:'contents', component: contents},
      {path:'province', component: province},
      {path:'city:index', component: city},
      {path:'county:index', component: county}
    ]}
  ]
})
