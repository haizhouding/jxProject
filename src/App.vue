<template>
    <div id="app">
   
      <!-- <div class="searchBar">
          <h1>酒仙网</h1>
          <input type="text">
          <input type="button" value="搜索">
      </div> -->
      <router-view></router-view>
      <div class="tabbar" v-show="show">
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
  name: 'App',
  methods: {
      fn() {
        console.log(this.$route.params);
      }
  },
  computed: {
    show() {
      if(this.$route.path == '/home') {
        console.log(this.$route.params.path );
        return true;
      }
    }
  }
}
</script>

<style>
    *{box-sizing:border-box;}
    body{width: 100%; color: blue;}
    body,nav,dl,dt,dd,p,h1,h2,h3,h4,ul,ol,li,input,button,textarea,footer{margin:0;padding:0;}
    body{font: .32rem 'Microsoft Yahei','Simsun';  color:#333;background:#fff;-webkit-text-size-adjust: none; min-width:320px;}
    h1,h2,h3,h4,h5,h6{font-size:100%}
    ul,ol{list-style:none}
    a{text-decoration:none;color:#1a1a1a}
    a:hover, a:active, a:focus{color:#1c5aa2;text-decoration: none;}
    a:active{color:#aaa;}
    img{vertical-align:middle;border:0;-ms-interpolation-mode:bicubic;}
    button,input,select,textarea{font-size:100%; vertical-align:middle;outline:none;}
    textarea{resize:none}
    button,input[type="button"],input[type="reset"],input[type="submit"] {cursor:pointer;-webkit-appearance:button;-moz-appearance:button}
    input:focus:-moz-placeholder,input:focus::-webkit-input-placeholder {color:transparent}
    button::-moz-focus-inner,input::-moz-focus-inner { padding:0; border:0}
    table { border-collapse:collapse; border-spacing:0}
    /*.fl{float:left;}.fr{float:right;}.hide{display:none;}.show{display: block;}*/
    .ellipsis { white-space:nowrap; text-overflow:ellipsis; overflow:hidden}
    .break { word-break:break-all; word-wrap:break-word}
    header, footer, article, section, nav, menu, hgroup {display: block;clear:all;}

    #app .tabbar{
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 1.146667rem;
    }
    
    #app .tabbar img {
      width: 1.173333rem;
      height: 1.013333rem;
    }

   

</style>
