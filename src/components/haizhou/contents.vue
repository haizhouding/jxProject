<template>
    <div id="contents">
            <down-load class="app"></down-load>
            <div class="main">
                <picture-show :productId="productId"></picture-show>
                <h2>{{detailList.productTitile}}</h2>
                <p class="advWords">{{detailList.productPromo.advWords}}</p>
                <p class="price"><span>￥</span>{{detailList.productPromo.price}}<i>酒仙价:{{detailList.productPromo.jxPrice}}</i></p>
                <p class="onSale">限时打折</p>
            </div> 
            <p class="stripe"></p>
            <coupon></coupon>
            <p class="stripe"></p>
            <p class="coins">金币 <span>赠送<i>{{detailList.productPromo.goldCoinNum}}</i>个金币</span></p>  
            <p class="stripe"></p>            
            <district></district>  
            <div class="seven"> <b></b><span>店铺发货&售后</span><b></b><span>7天退换</span></div>
            <p class="stripe"></p> 
            <comments :productId="productId"></comments> 
            <p class="stripe"></p> 
            <shop></shop> 
            <p class="stripe"></p> 
            <product-intro></product-intro>
            <div class="prodDet">
                <h3>
                    <i></i>温馨提示
                </h3>
                <p>根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。</p>
            </div>
            <product-img :productId="productId"></product-img>
    </div>  
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import downLoad from './downLoad'
import PictureShow from './PictureShow'
import coupon from './coupon'
import district from './district'
import comments from './comments'
import shop from './shop'
import productIntro from './productIntro'
import productImg from './productImg'
import bottomBar from './bottomBar'
import productLists from './json/product.json'

export default {
    name: "cart",
    data () {
        return {
            msg: '商品详情',
            detailList: {},
            productId: ''
        }
    },
    components:{
        downLoad,
        PictureShow,
        coupon,
        district,
        comments,
        shop,
        productIntro,
        productImg
    },
    created() {
        this.productId = this.$route.params.id
        for (var product of productLists) {
            if( product.productId == this.productId) {
                this.detailList = product;
            }
        }
        this.$store.dispatch('setProductId', this.productId)
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

    #contents .main{
        padding: 0 .32rem;
    }
    #contents .main h2 {
        font-size: .346667rem;
        line-height: .933333rem;
    }
    #contents .main .advWords{
        color: red;
        font-size: .293333rem;
    }
    #contents .main .price{
        font-size: .373333rem;
        color:#fc5a5a;
    }
    #contents .main .price i{
        text-decoration: line-through;
        font-style: normal;
        font-size: .293333rem;
        color: #999999;
        line-height: .853333rem;
        margin-left: .24rem;
    }
    #contents .main .onSale {
        background: #ffa855;
        height: .426667rem;
        line-height: .426667rem;
        color: white;
        width: 1.493333rem;
        text-align: center;
        margin-bottom: .4rem;  
    }
    #contents .stripe {
        height: .213333rem;
        width: 100%;
        background:#f3f5f6;
    }
    #contents .coins{
        height: 1.2rem;
        line-height: 1.2rem;
        padding-left: .266667rem;
    }
    #contents .coins span{
        margin-left: .746667rem;
    }
    #contents .coins span i{
        font-style: normal;
        color: red;
    }
     #contents .seven{
        height: 1.066667rem;
        line-height: 1.066667rem;
        background: #f9f9f9;
        padding-left: .32rem;
    }
    #contents .seven b{
        display: inline-block;
        width: .373333rem;
        height: .39rem;
        vertical-align: top;
        margin: .346667rem .133333rem 0 .133333rem;
    }
    #contents .seven b:first-of-type{
        background: url(https://img08.jiuxian.com/bill/2016/1129/2f2973f1af9341e885c073353b1f2ade.png) left center no-repeat;
        background-size: .373333rem .373333rem;
    }
    #contents .seven b:last-of-type{
        background: url(https://img08.jiuxian.com/bill/2016/1129/570c079e749949da977fd08990cfd4a4.png) left center no-repeat;
        background-size: .373333rem .373333rem;
        margin-left: .373333rem;   
    }
    #contents .prodDet {
        width: 100%;
        margin-top: .266667rem;
        padding: 0 .266667rem;
        color: #848484;
    }
    #contents .prodDet h3 {
        line-height: .666667rem;
        height: .666667rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/prodInfoBg.jpg);
        margin-bottom: .266667rem;
    }
    #contents .prodDet h3 i{
        display: inline-block;
        width: .213333rem;
        height: .213333rem;
        background: #b00000;
        margin-right: .213333rem;

    }
  

</style>