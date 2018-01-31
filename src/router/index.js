import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/haizhou/mine'
import home from '../components/mingxiong/Home'
import types from '../components/yaowu/types.vue'
import cart from '../components/zengjian/cart.vue'


export default new Router({
  routes: [
    {path: '/mine', component: mine},
    {path: '/home', component: home},
    {path: '', component: home},
    {path: '/types', component: types},
    {path: '/cart', component: cart}
  ]
})
