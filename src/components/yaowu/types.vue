<template>
<div>
    <Bar-Sort></Bar-Sort>
    <div class="table_t">
        <a href="javascript:;" @click='mFn(index)' v-for="(prop, index) in props" :key="prop.id">{{ prop }}</a>
    </div>
</div>
   
</template>

<script>
    import BarSort from './barSort/BarSort.vue'
    export default {
        data() {
            return {
                props:["白酒","葡萄酒","洋酒",'整箱购','老酒','清仓特卖','海外直采'
                ,'精美大坛','红酒整箱','值得买','销量排行','礼尚往来']
                
            }
        },
        methods:{
             mFn(index){
                this.values =  this.props[index];
                setTimeout(() =>{
                    this.$router.push("/list/ + this.values")
                    //  <router-link  to="'/list/' + prop"  ></router-link>
                },200)
            }
        },
        components: {
            BarSort
        },
       
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
       background-size:6.613333rem 16rem; 
   }
   .table_t a:nth-of-type(2){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem .4rem   ;
     background-size:6.613333rem 16rem;
   }
    .table_t a:nth-of-type(3){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.2rem .4rem   ;
         background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(4){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -1.6rem   ;
     background-size:6.613333rem 16rem;
   }
    .table_t a:nth-of-type(5){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -1.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(6){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.2rem -1.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(7){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -3.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(8){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -3.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(9){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.2rem -3.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(10){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat 1.253333rem -5.6rem   ;
     background-size:6.613333rem 16rem;
   }
   .table_t a:nth-of-type(11){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -1rem -5.6rem   ;
     background-size:6.613333rem 16rem;
   }
  .table_t a:nth-of-type(12){
       background: url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) no-repeat -3.2rem -5.6rem   ;
     background-size:6.613333rem 16rem;
   }
</style>


