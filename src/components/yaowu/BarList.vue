<template>
    <div>
       <div class="nav_top">
            <a href="javascript:;" @click='back'><img src="https://m.jiuxian.com/mjava_statics/images/headBack.jpg"></a>
            <a href="javascript:;"><span>商品列表</span></a>
            <a href="javascript:;" @click="showFn">筛选</a>
        </div>
        <Bar-List-More :message='message'></Bar-List-More>

    </div>
</template>
    
<script>

import BarListMore from './barSort/BarListMore.vue'
export default {
    name: "BarList",
    data () {
        return {
            is:true,
            message:this.$route.params.barName
        };
    },
    components: {
         BarListMore,
         Element
    },
    methods:{
        showFn(){
            // this.is = !this.is;
        },
        //返回上一层 
        back() {
            // history.back()
            this.$router.go(-1)
        }
    },
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
        margin-left:.266667rem; 
        width: .533333rem;
        height: .8rem;
    }
    .nav_top>a:nth-of-type(3){
        width: 1.466667rem;
        color: white;
        /* height: 1.066667rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat -4.24rem 0.2rem;
        background-size:5.573333rem 1.093333rem;  */
    }
     span{
        color: white;
    }
</style>