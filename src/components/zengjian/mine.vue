<template>
     <div>
         <!-- 头部 -->
        <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
    </div>
</template>

<script>
import BarSortTop from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import mine from './mine.vue'
    export default {
        name: "mine",
        data () {
            return {
                msg:'用户登录'
            };
        },
        components: {
            BarSortTop
        }
    }
</script>

<style scoped>
       .nav_top{height: 40px;background: red;}
       .nav_top a span{margin-left:140px;line-height: 40px;}
</style>

