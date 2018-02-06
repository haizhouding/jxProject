<template>
    <div id="cart">
        <header-bar :msg='msg' class="header"></header-bar>
        <div class="empty" v-show="this.cartList.length < 1">
            <img src="https://mcart.jiuxian.com/statics/images/cart/kong.png" alt="">
            <p>购物车还是空的</p>
            <p>快去逛逛吧</p>
        </div>

        <ul class="productList">
            <li v-for="(product, index) in cartList" :key="index">
                <img :src="productList[index].pictureList.srcList[0]" alt="">
                <div class="intro">
                    <h3>{{productList[index].productTitile}}</h3>
                    <div class="price">{{productList[index].productPromo.price | moneyFormatFn}}</div>
                    <p class="num"><span @click="reduce(product.id)">-</span><b>{{product.num}}</b><span @click="add(product.id)">+</span></p>
                    <i @click="delProduct(product.id)">删除</i>
                </div>
            </li>
        </ul>
        <div class="bottomBar" v-show="this.cartList.length > 0">
            <p class="total">合计：{{totalMoney | moneyFormatFn}}</p>
            <p class="buy">去结算({{totalNum}})</p>
            </div>
        
    </div>  
</template>
<script>
import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'


export default {
    name: "component_name",
    data () {
        return {
            msg: '购物车',
            cartList: [],
            productList: [],
            totalmoney: 0
        };
    },
    components: {
        HeaderBar
    },
    methods: {
        add(id) {
            this.$store.dispatch('addProductNum', id)
        },
        reduce(id) {
            this.$store.dispatch('reduceProductNum', id)
        },
        delProduct(id) {
            this.$store.dispatch('delProduct', id);
            this.createProductList()
            // console.log(this.productList)
        },
        createProductList() {
            this.productList = [];
            for (var product of this.cartList) {
                for (var good of productLists) {
                    if (product.id == good.productId) {
                        this.productList.push(good);
                    }
                }
            }
        }
    },
    computed: {
        totalMoney(){
            var index = 0
            var totalmoney = 0;
            for (var product of this.cartList) {
                totalmoney += product.num * this.productList[index].productPromo.price
                index++
            }
            return totalmoney;
        },
        totalNum() {
            var num = 0;
            for (var product of this.cartList) {
               num += product.num ;
            }
            return num;
        }
    },
    filters: {
        moneyFormatFn(value) {
            return '￥' + value.toFixed(2)
        }
    },
    created() {
        this.cartList = this.$store.getters.getCartList;
        this.createProductList()
    }
}
</script>
<style lang="css" scoped>
    #cart{
        width: 100%;
        padding-top: 1.2rem;
    }
    #cart .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    #cart .empty{
        margin: 50% auto 0 auto;
        width: 25%;
        text-align: center;
        
    }
    #cart .empty img{
        width: 1.5rem;
        height: 1.5rem;
    }
    #cart .productList li {
        padding:.266667rem;
        clear: both;
        overflow: hidden;
        border-bottom: 1px solid rgb(110, 109, 108)
    }
    #cart .productList li img{
        width: 20%;
        border: 1px solid rgb(160, 152, 152);
        float: left;
    }
    #cart .productList li>div {
        width: 80%;
        float: left;
        padding-left: .426667rem;
    }
    #cart .price {
        margin-top: .5rem;
        color: red;
    }
    .productList .num{
        float: left;
        border: 1px solid #e8e8e8;
    }
   .productList .num span{
        display: inline-block;
        text-align: center;
        width: .533333rem;
    }

    .productList .num span:first-of-type{
        border-right: 1px solid #e8e8e8;
    }
    .productList .num span:last-of-type{
        border-left: 1px solid #e8e8e8;
    }
   .productList .num b{
        display: inline-block;
        width: .906667rem;
        text-align: center;
        
    }
    .productList .intro i {
        float: right;
        font-style: normal;
        display: inline-block;
        width: .933333rem;
        text-align: center;
        border-left: 1px solid #4b3d3d;
    }
    #cart .bottomBar{
        position: fixed;
        bottom: 0;
        height: 1.333333rem;
        width: 100%;
    }
    #cart .bottomBar .total{
        width: 70%;
        float: left;
        height: 100%;
        text-align: center;
        line-height: 1.2rem;
        font-size: .426667rem;
    } 
     #cart .bottomBar .buy{
        width: 30%;
        float: left;
        background: #fb7273;
        height: 100%;
        color: white;
        font-size: .426667rem;
        text-align: center;
        line-height: 1.2rem;

    } 
</style>