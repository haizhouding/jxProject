<template>
    <div>
       <div class="nav_top">
            <a href="javascript:;"><img src="https://m.jiuxian.com/mjava_statics/images/headBack.jpg"></a>
            <a href="javascript:;"><span>{{msg}}</span></a>
            <a href="javascript:;" @click="showFn"></a>
        </div>
        <Bar-Sort-Navm :is_show="is"></Bar-Sort-Navm>
    </div>
</template>
    
<script>
import BarSortNavm from './BarSortNavm.vue'

export default {
    name: "BarSortTop",
    data () {
        return {
            is:false,
        };
    },
    props:['msg'],
    components: {
         BarSortNavm
    },
    methods:{
        showFn(){
            this.is = !this.is;
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
</style>