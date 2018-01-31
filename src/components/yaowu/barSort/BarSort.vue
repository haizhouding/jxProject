<template >
<div>
    <div class="nav_top">
        <a href="javascript:;"><img src="https://m.jiuxian.com/mjava_statics/images/headBack.jpg"></a>
        <a href="javascript:;"><span>商品列表</span></a>
        <a href="javascript:;" @click="showFn"></a>
    </div>   
    <div class="nav_m" v-show="is_show">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">搜索</a>
        <a href="javascript:;">购物车</a>
        <a href="javascript:;">我的酒仙</a>
    </div>
    <div class="bgDiv">
        <div>
            <input type="text" placeholder='茅台'><span>搜索</span>
        </div>
    </div> 
</div>
</template>
    
<script>
export default {
    name: "BarSort",
    data () {
        return {
            is_show:true 
        };
    },
    methods:{
        showFn(){
            this.is_show = !this.is_show;
        }
    }
}
	
</script>
    
<style lang="css" scoped>
    .nav_top{
        width: 100%;
        height: 1.066667rem;
        display: flex;
        font-size: .426667rem;
        line-height: 1.066667rem;
        background-color:#de4943 ;
        justify-content: space-between;
    }
    .nav_top img{
        width: .533333rem;
        height: .8rem;
    }
    
    .nav_top a:nth-of-type(3){
        width: .666667rem;
        height: 1.066667rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -4.24rem 0.2rem;
        background-size:5.573333rem 1.093333rem; 
    }
     span{
        color: white;
    }
    .bgDiv{
        padding-top:0.1px; 
        clear: both;
        height: 1.333333rem;
        background-color: #e2e2e2;
    }
    .bgDiv div{
        width: 8.986667rem;
        height: .8rem;
        margin: .266667rem auto;
    }
    .bgDiv input{
        height: .8rem;
        width: 7.12rem;
        border: 0;
        float: left;
        text-indent: .266667rem;
    }
    .bgDiv span{
        display: inline-block;
        width: 1.866667rem;
        height: .8rem;
        background-color: #de4943;
        text-align: center;
        line-height: .8rem;
        float: left;
    }
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