<template>
<div>
    <Bar-Sort></Bar-Sort>
    <div class="table_t">
        <a href="#">白酒</a>
        <a href="#">葡萄酒</a>
        <a href="#">洋酒</a>
        <a href="#">整箱购</a>
        <a href="#">老酒</a>
        <a href="#">清仓特卖</a>
        <a href="#">海外直采</a>
        <a href="#">精美大坛</a>
        <a href="#">红酒整箱</a>
        <a href="#">值得买</a>
        <a href="#">销量排行</a>
        <a href="#">礼尚往来</a>
    </div>
</div>
   
</template>

<script>
    import BarSort from './barSort/BarSort.vue'
    export default {
        data() {
            return {
           
            }
        },
        components: {
            BarSort
        }
    }
</script>
<style lang="css" scoped>
   .table_t{
       display: flex;
       flex-wrap:wrap;
       
       background-size:6.613333rem 16rem; 
   }
   .table_t>a{
       width: 3.333333rem;
       height: 2.16rem;
       text-align: center;
       line-height: 3.466667rem ;
       border-bottom: 1px solid #f6f6f6;
   }
   .table_t a:nth-of-type(1){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem .4rem   ;
   }
   .table_t a:nth-of-type(2){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem .4rem   ;
   }
    .table_t a:nth-of-type(3){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.4rem .4rem   ;
   }
   .table_t a:nth-of-type(4){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -1.6rem   ;
   }
    .table_t a:nth-of-type(5){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -1.6rem   ;
   }
   .table_t a:nth-of-type(6){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.4rem -1.6rem   ;
   }
   .table_t a:nth-of-type(7){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -3.6rem   ;
   }
   .table_t a:nth-of-type(8){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -3.6rem   ;
   }
   .table_t a:nth-of-type(9){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.4rem -3.6rem   ;
   }
   .table_t a:nth-of-type(10){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -5.6rem   ;
   }
   .table_t a:nth-of-type(11){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -5.6rem   ;
   }
  .table_t a:nth-of-type(12){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.4rem -5.6rem   ;
   }
</style>


