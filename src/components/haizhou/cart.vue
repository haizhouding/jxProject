<template>
       <!-- <div id="details">
            <div class="header">
                <a href="javascript:;" class="headback"></a>
                <h1>商品详情</h1>
                <a href="javascript:;" class='more'></a>
            </div>
        </div> -->
    <header-bar></header-bar>
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/BarSort'
export default {
    name: "cart",
    data () {
        return {
            msg: '商品详情'
        };
    },
     components:{
        HeaderBar
    }
}
</script>
    
<style lang="css" scoped>
    /* #details .header{
        height: 1.066667rem;
        background: #de4943;
        display: flex;
        justify-content: space-between;
        padding: 0 .373333rem 0 .266667rem;
    }
    #details .header .headback {
        float: left;
        display: inline-block;
        height: 1.066667rem;
        width: 0.8rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/headBack.jpg) left center no-repeat;
    }
    #details .header h1 {
        color: white;
        float: left;
        height: 1.066667rem;
        line-height: 1.066667rem;
        font-size: .4rem;
    }
    #details .header .more{
        width: .586667rem;
        height: .453333rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -4.16rem -0.13333rem no-repeat;
        background-size: 5.573333rem 1.093333rem;
        margin-top: .293333rem;
    } */
</style>