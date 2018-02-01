<template>
    <div id="cart">
        <div id="details">
            <header-bar :msg='msg'></header-bar>
            <down-load></down-load>
            <div class="main">
                <picture-show></picture-show>
                <h2>52°贵州茅台集团白金原浆酒(5A)绵柔425ml*6瓶 整箱白酒</h2>
                <p class="advWords">{{detailList.productPromo.advWords}}</p>
                <p class="price"><span>￥</span>{{detailList.productPromo.price}}<i>酒仙价:{{detailList.productPromo.jxPrice}}</i></p>
            </div>
            
        </div>  
    </div>
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import downLoad from './downLoad'
import PictureShow from './PictureShow'

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
            }
        }
    },
     components:{
        HeaderBar,
        downLoad,
        PictureShow
    }
}
</script>
    
<style lang="css" scoped>

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
</style>