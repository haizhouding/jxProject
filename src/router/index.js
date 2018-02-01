import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/zengjian/mine'
import home from '../components/mingxiong/Home.vue'
import types from '../components/yaowu/types.vue'
import cart from '../components/haizhou/cart.vue'

import list from '../components/yaowu/list.vue'





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
