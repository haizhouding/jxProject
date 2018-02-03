<template>
    <div id="bottomBar">
        <ul>
            <li>联系卖家</li>
            <li>店铺</li>
            <li>购物车</li>
            <li>加入购物车</li>
            <li>立即购买</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "bottomBar",
    data () {
        return {
        };
    }
}
</script>
<style lang="css" scoped>
    #bottomBar {
        position: fixed;
        bottom: 0;
        height: 1.2rem;
        background: #666666;
        width: 100%;
    }
    #bottomBar li{
        float: left;
    }
    #bottomBar li{
        background: #fafafa;
        width: 1.706667rem;
        line-height: 1.2rem;
        text-align: center;
        border-top: 1px solid #e9e9ea;
    }
    #bottomBar ul li:nth-child(1),#bottomBar ul li:nth-child(2){
        border-right: 1px solid #e9e9ea;
    }
    #bottomBar ul li:nth-child(4) {
        background: #fc5a5a;
        color: #fff;
        font-weight: blod;
        width: 2.506667rem;
        border: none;
        font-weight: blod;
    }
     #bottomBar ul li:nth-child(5) {
        color: #fff;
        background: #3c3f51;
        font-weight: blod;
        border: none;
        width: 100%;
        
    }
</style>