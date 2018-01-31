import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/haizhou/mine'
<<<<<<< HEAD
import home from '../components/mingxiong/Home'
=======
import home from '../components/mingxiong/Home.vue'
import types from '../components/yaowu/types.vue'
import cart from '../components/zengjian/cart.vue'
>>>>>>> 0c66e19d824fe4a81d82d24711506cebb4b737f8


export default new Router({
  routes: [
    {path: '/mine', component: mine},
    {path: '/home', component: home},
    {path: '', component: home},
    {path: '/types', component: types},
    {path: '/cart', component: cart}
  ]
})
