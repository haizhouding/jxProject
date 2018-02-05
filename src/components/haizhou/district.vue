<template>
    <div id="district">
        <div class="num"><span>数量</span> <p><span @click="reduce"> -</span><b>{{num}}</b><span @click="add">+</span></p></div>
        <router-link to="/details/province"> 
            <div class="regions">
                <p>送至<span class="pro">{{district.pro}}</span>
                <span class="city">{{district.city}}</span>
                <span class="town">{{district.county}}</span>
                <b></b></p>
                <p class="has">有货</p>
            </div>
        </router-link>
        <div class="fee">运费 <span>店铺单笔订单不满86元，在线支付运费9元</span></div>
        <div class="fee">提示 <span>每购买两瓶送原厂手提袋</span></div>
    </div>
</template>
<script>


import regions from './json/regions.json'
export default {
    name: "district",
    data () {
        return {
            num: 1,
            district: {}
        };
    },
    methods: {
        reduce() {
            if (this.num > 1) {
                this.num -= 1;
            }
        },
        add() {
            this.num += 1;
        } 
    },
    created() {
        this.district = this.$store.getters.getDistrict
    }
}
</script>
<style lang="css" scoped>
    #district{
        padding-left: .266667rem;
        padding-right: .373333rem;

    }
    #district .num{
        margin-top: .266667rem;
        height: .666667rem;
        line-height: .666667rem;
    }
    #district .num >span{
        float: left;
        margin-right: .693333rem;
    }
    #district .num p{
        float: left;
        border: 1px solid #e8e8e8;
    }
    #district .num p span{
        display: inline-block;
        text-align: center;
        width: .533333rem;
    }
    #district .num p span:first-of-type{
        border-right: 1px solid #e8e8e8;
    }
     #district .num p span:last-of-type{
        border-left: 1px solid #e8e8e8;
    }
    #district .num p b{
        display: inline-block;
        width: .906667rem;
        text-align: center;
        
    }
    #district .regions {
        clear: both;
        margin-top: .666667rem;
        
    }
   
     #district .regions p:first-of-type b{
         height: .266667rem;
         width: .266667rem;
         /* background: red; */
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) -3.52rem -1.12rem no-repeat;
        background-size: 4rem 4rem;
        float: right;
         
     }

    #district .regions .pro {
        display: inline-block;
        margin-left: .4rem;
    }
    #district .regions span{
        margin-right: .133333rem;
    }
    #district .regions .has{
        text-indent: 1.146667rem;
        color: red;
        font-size: .293333rem;
        margin-bottom: .48rem;
    }
    #district .fee{
        height: .96rem;
        color: #666666;
    }
    #district .fee span{
        margin-left: .693333rem;
        color: black;
    }
    #district .region {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 9999;
    }

    </style>