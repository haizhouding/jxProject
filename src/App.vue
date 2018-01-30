<template>
    <div id="app">
      <div class="searchBar"></div>
      <router-view></router-view>
      <div class="tabbar">
          <router-link to="/home">首页</router-link> 
          <router-link to="/types">分类</router-link> 
          <router-link to="/cart">购物车</router-link> 
          <router-link to="/mine">我的</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app .tabbar{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: wheat;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 50px;
    }
</style>
