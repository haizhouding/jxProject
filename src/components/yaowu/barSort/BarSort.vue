<template >
<div>
    <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>    
    <div class="bgDiv">
        <div>
            <input type="text" placeholder='茅台' @click="displayShow" ><span>搜索</span>
        </div>
        <div class="hotDiv" v-show='is_show'>
            <p>热门搜索：</p>
            <div class="hotA">
                <a href="#">茅台</a>
                <a href="#">五粮液</a>
                <a href="#">泸州老窖</a>
                <a href="#">剑南春</a>
                <a href="#">酒鬼酒</a>
                <a href="#">威士忌</a>
                <a href="#">拉菲</a>                
            </div>
            <div class="emptry" @click="displayNone">
            </div>
        </div>
    </div> 
</div>
</template>
    
<script>

import BarSortTop from './barSortTop/BarSortTop.vue'

export default {
    name: "BarSort",
    data () {
        return {
             msg:'选酒',
             is_show:false
        };
    },
    components: {
         BarSortTop
    },
    methods:{
        displayShow(){
            this.is_show = true;
        },
        displayNone(){
            this.is_show = false;
        }
    }
}
	
</script>
    
<style lang="css" scoped>
    span{
        color: white;
    }
    .bgDiv{
        padding-top:0.1px; 
        clear: both;
        height: 1.333333rem;
        background-color: #e2e2e2;
        position:relative;
    }
    .bgDiv>div:nth-of-type(1){
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
    .hotDiv{
        position: absolute;
        height:17.786667rem;
        width: 100%;
        z-index: 9999;
        display: flex;
        flex-wrap:wrap;
    }
    .hotDiv p,.hotA{
        /* float: left; */
        height: 3.04rem;
        background-color:white; 
        padding-top:.32rem;
        line-height: .533333rem;
    }
    .hotDiv p{
        width: 3.533333rem;
        text-indent: .266667rem;
        padding: .32rem .266667rem 0 0;
    }
    .hotA{
        width: 5.933333rem;
        display: flex;
        flex-wrap:wrap;
    }
    .hotA a{
        font-size: .32rem;
        line-height: .586667rem;
        height: .586667rem;
        border: 1px solid #c6c6c6;
        margin-right:.4rem; 
        padding: 0 .266667rem;
        border-radius: .08rem;
    }
    .emptry{
        width: 100%;
        height: 14.773333rem;
        background-color:#616161; 
    }
</style>