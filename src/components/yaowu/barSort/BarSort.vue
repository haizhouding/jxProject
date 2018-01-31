<template >
<div>
    <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>    
    <div class="bgDiv">
        <div>
            <input type="text" placeholder='茅台'><span>搜索</span>
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
             msg:'选酒'
        };
    },
    components: {
         BarSortTop
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
    
</style>