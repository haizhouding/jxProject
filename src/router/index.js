import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/zengjian/mine'
import home from '../components/mingxiong/Home.vue'
import types from '../components/yaowu/types.vue'
<<<<<<< HEAD

import cart from '../components/zengjian/cart.vue'
//跳到商品列表
import list from '../components/yaowu/BarList.vue'

import cart from '../components/haizhou/cart.vue'

=======
import cart from '../components/haizhou/cart.vue'

import list from '../components/yaowu/list.vue'



>>>>>>> c1141c5ecf14bb168c02c885da6158c9e132e241


export default new Router({
  routes: [
    {path: '/mine', component: mine},
    {path: '/home', component: home},
    {path: '', component: home},
    {path: '/types', component: types},
    {path: '/cart', component: cart},
    {path: '/list', component: list},
  ]
})
