<template>
    <div id="app">
      <div class="searchBar"></div>
      <router-view></router-view>
      <div class="tabbar">
          <router-link to="/home"><img src="https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png" alt=""></router-link> 
          <router-link to="/types"><img src="https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png" alt=""></router-link> 
          <router-link to="/aaa"><img src="https://img10.jiuxian.com/bill/2018/0130/6af386f816f548afb09efd7d333487c9.png" alt=""></router-link> 
          <router-link to="/cart"><img src="https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png" alt=""></router-link> 
          <router-link to="/mine"><img src="https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png" alt=""></router-link>
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
