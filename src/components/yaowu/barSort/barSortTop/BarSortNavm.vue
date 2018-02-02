<template>
    <div class="nav_m" v-show="is_show">
        <router-link to="/home"><a href="javascript:;">首页</a></router-link> 
        <router-link to="/types"><a href="javascript:;">搜索</a></router-link>
        <router-link to="/cart"><a href="javascript:;">购物车</a></router-link>
        <router-link to="/mine"><a href="javascript:;">我的酒仙</a></router-link>
     </div>
</template>
    
<script>
export default {
    name: "BarSortNavm",
    data () {
        return {
            
        };
    },
    props:['is_show']
}
</script>
    
<style lang="css" scoped>
    .nav_m{
        height:1.226667rem ;
        border-bottom: .026667rem solid #cccccc;
        display: flex;
        justify-content: space-between;
        background-color: #efefef;
    }
    .nav_m a {
        text-align: center;
        width:1.493333rem;
       line-height:1.733333rem;
       color: #848da1;
    }
    .nav_m a:nth-of-type(1){
        text-align: right;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat .76rem 0.01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(2){
        width: .88rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -.913333rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(3){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -1.566667rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(4){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -2.6rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
</style>