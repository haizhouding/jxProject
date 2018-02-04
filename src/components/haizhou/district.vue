<template>
    <div id="district">
       <div class="num"><span>数量</span> <p><span @click="reduce"> -</span><b>{{num}}</b><span @click="add">+</span></p></div>
        <div class="regions" >
            <p >送至<span class="pro">{{pro}}</span>
            <span class="city">{{city}}</span>
            <span class="town">{{county}}</span>
            <b></b></p>
            <p class="has">有货</p>
        </div>
        <div class="fee">运费 <span>店铺单笔订单不满86元，在线支付运费9元</span></div>
        <div class="fee">提示 <span>每购买两瓶送原厂手提袋</span></div>
        <div class="region">
            <ul>
                <li v-for="pro in regionsList[1]" :key="pro.id" @click ="proFn(pro)">{{pro[1]}}</li>
            </ul>
            <ul>
                <li v-for="city in cityList" :key="city.id" @click ="cityFn(city)">{{city[1]}}</li>
            </ul>
            <ul>
                <li v-for="county in countyList" :key="county.id" @click="countyFn(county)">{{county[1]}}</li>
            </ul>
        </div>
    </div>
</template>
<script>


import regions from './json/regions.json'
export default {
    name: "district",
    data () {
        return {
            num: 1,
            regionsList: [],
            cityList: [],
            countyList: [],
            pro: '江苏',
            city: '泰州',
            county: '兴化'
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
        },
        proFn(pro) {
            this.cityList = this.regionsList[pro[0]];
            this.pro = pro[1]
        },
        cityFn(city) {
            this.countyList = this.regionsList[city[0]];
            this.city = city[1];
        },
        countyFn(county) {
            this.county = county[1];
        }
        
    },
    created() {
        this.regionsList = regions;
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
         display: inline-block;
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
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3)
    }

    </style>