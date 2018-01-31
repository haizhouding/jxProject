<template>
    <div class="nav_m" v-show="is_show">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">搜索</a>
        <a href="javascript:;">购物车</a>
        <a href="javascript:;">我的酒仙</a>
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
       line-height:1.733333rem;
       margin: 0 .8rem;
       color: #848da1;
    }
    .nav_m a:nth-of-type(1){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -.08rem 0.01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(2){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -1.013333rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(3){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -1.866667rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
    .nav_m a:nth-of-type(4){
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -2.8rem .01rem;
        background-size:5.573333rem 1.093333rem; 
    }
</style>