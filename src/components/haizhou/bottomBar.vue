<template>
    <div id="bottomBar">

        <ul>
            <a href="#"><li><img src="https://m.jiuxian.com/mjava_statics/images/goods/lxmj.png" alt=""></li></a>
            <a href="#"><li><img src="https://m.jiuxian.com/mjava_statics/images/goods/sjdp.png" alt=""></li></a>
            <a href="#"><li @click="toCart">
                <b class="num" v-show='num > 0'>{{num}}</b>
                <img src="https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png" alt=""></li></a>
        </ul>
        <div class="btn">
            <span @click="addProduct()">加入购物车</span>
            <span>立即购买</span>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "bottomBar",
    data () {
        return {
            num: 0
        };
    },
    methods: {
        addProduct() {
           this.$store.dispatch('addProduct')
           this.num += this.$store.getters.getProductNum;
        },
        toCart() {
            this.$router.push({path: '/cart'})
        }
    },
    props: ['productId'],
    created() {
        var cartList = this.$store.getters.getCartList;
        for (var product of cartList) {
            this.num += product.num;
        }
    }
}
</script>
<style lang="css" scoped>
    #bottomBar {
        position: fixed;
        bottom: 0;
        height: 1.2rem;
        /* background: #666666; */
        width: 100%;
    }
    #bottomBar ul{
        float: left;
        width: 50%;
    }
    #bottomBar ul li {
        float: left;
        width: 33.3333%;
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        background:#f9f9f9;
        position: relative;

    }
    #bottomBar ul li img{
        display: block;
        width: 1.146667rem;
        height: 1.146667rem;
        margin: 0 auto;
    }
    #bottomBar ul li .num {
        position: absolute;
        width: .426667rem;
        height: .426667rem;
        line-height: .426667rem;
        text-align: center;
        background: rgb(233, 65, 65);
        border-radius: 50%;
        color: #fff;
        left: 60%;
        top: 10%;
    }
    #bottomBar .btn{
        display: flex;
        align-items: stretch;
        height: 100%;
        width: 50%;
        text-align: center;
        line-height: 1.2rem;
        color: #fff;
        /* float: left; */
    }
    #bottomBar .btn span:first-child{
        background: red;
        width: 50%;
    }
    #bottomBar .btn span:last-child{
        background: #606271;
        width: 50%;
    }
    
</style>