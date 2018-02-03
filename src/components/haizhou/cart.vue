<template>
    <div id="cart">
        <div id="details">
            <header-bar :msg='msg' class="header"></header-bar>
            <down-load class="app"></down-load>
            <div class="main">
                <picture-show :pictureList="pictureList"></picture-show>
                <h2>52°贵州茅台集团白金原浆酒(5A)绵柔425ml*6瓶 整箱白酒</h2>
                <p class="advWords">{{detailList.productPromo.advWords}}</p>
                <p class="price"><span>￥</span>{{detailList.productPromo.price}}<i>酒仙价:{{detailList.productPromo.jxPrice}}</i></p>
                <p class="onSale">限时打折</p>
            </div>
            <p class="stripe"></p>
            <coupon></coupon>
            <p class="stripe"></p>
            <p class="coins">金币 <span>赠送<i>99</i>个金币</span></p>  
            <p class="stripe"></p>            
            <district></district>    
        </div>  
    </div>
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import downLoad from './downLoad'
import PictureShow from './PictureShow'
import coupon from './coupon'
import district from './district'

export default {
    name: "cart",
    data () {
        return {
            msg: '商品详情',
            detailList: {
                "productPromo": {
                    "proBasicPromo": [{
                        "actId": 192544,
                        "activType": "A_STRAIGHTDOWN",
                        "actTypeName": "限时购",
                        "actAdv": "【年终触底价 直降30元】",
                        "zdyname": "",
                        "zdyurl": "",
                        "slogan1": "【年终触底价 直降30元】",
                        "slogan2": "【年终触底价 直降30元】",
                        "pageType": 0,
                        "promotionTagColor": "#ffa855",
                        "tagName": "限时抢购",
                        "gifts": null
                    }],
                    "jxPrice": 798.00,
                    "price": 198.00,
                    "clubPrice": null,
                    "advWords": "★年货特卖节 回家送礼囤货】　　　　　　　　　★整箱白金酒 带手提袋三个】　　　　　　　 ★领券买２立减２０元　茅台出品　　　★地区包邮　品质保证　破损包赔　　　　　　　　",
                    "endTimeLen": 825194,
                    "goldCoinNum": 99,
                    "purchaseCycle": 1,
                    "purchaseNubs": null,
                    "cheaperThanPc": 0,
                    "buyMoreConcessionVOS": [{
                        "suitNubs": 1,
                        "signlePrice": 198.00
                    }],
                    "useRedEnvelope": false
                },
                "isOnSale": 1,
                "isClub": false,
                "couponNameList": ["满1299减70", "满596减35", "满396减20"],
                "isCollect": false
            },
            pictureList: {
                width: '9.066667rem',
                height: '9.066667rem',
                srcList: ['http://img07.jiuxian.com/2017/1216/b46e8e6dd5a4479bab49effc9463a9985.jpg',
                         'http://img10.jiuxian.com/2018/0125/5589ec751ea748428b43bffc182fee365.jpg',
                         'http://img07.jiuxian.com/2018/0108/044d251824af4ff78b87430e61d9a7d85.jpg',
                         'http://img06.jiuxian.com/2017/1216/ba15356dd61343538c3017a3e560e4255.jpg',
                         'http://img10.jiuxian.com/2017/1216/e0d0b50fff5a4b48958c9a4dae5f2c5a5.jpg'
                ]
            }
        }
    },
     components:{
        HeaderBar,
        downLoad,
        PictureShow,
        coupon,
        district
    }
}
</script>
    
<style lang="css" scoped>
    .header{
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 10rem;
    }
    .app{
        margin-top: 1.066667rem
    }

    #details .main{
        padding: 0 .32rem;
    }
    #details .main h2 {
        font-size: .346667rem;
        line-height: .933333rem;
    }
    #details .main .advWords{
        color: red;
        font-size: .293333rem;
    }
    #details .main .price{
        font-size: .373333rem;
        color:#fc5a5a;
    }
    #details .main .price i{
        text-decoration: line-through;
        font-style: normal;
        font-size: .293333rem;
        color: #999999;
        line-height: .853333rem;
        margin-left: .24rem;
    }
    #details .main .onSale {
        background: #ffa855;
        height: .426667rem;
        line-height: .426667rem;
        color: white;
        width: 1.493333rem;
        text-align: center;
        margin-bottom: .4rem;  
    }
    #details .stripe {
        height: .213333rem;
        width: 100%;
        background:#f3f5f6;
    }
    #details .coins{
        height: 1.2rem;
        line-height: 1.2rem;
        padding-left: .266667rem;
    }
    #details .coins span{
        margin-left: .746667rem;
    }
    #details .coins span i{
        font-style: normal;
        color: red;
    }
</style>