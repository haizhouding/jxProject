<template>
    <div id="shop">
        <a href="">
            <b></b>
            <img src="http://img10.jiuxian.com/brandlogo/2017/0903/8f5d27898c144936951f254ea5220cf1.jpg" alt="">
            <div class="middle">
                <p>朗格玛缔官方旗舰店</p>
                <div>【点我抢购】新年囤好货-</div>
            </div>   
            
        </a>
       
    </div>
</template>
<script>
export default {
    name: "shop",
    data () {
        return {
        };
    }
}
</script>
<style lang="css" scoped>
    #shop{
        width: 100%;
        height: 1.706667rem;
        padding: 0 .266667rem 0 .4rem;
    }
    #shop img{
        width: 2rem;
        height: .8rem;
        /* display: inline-block; */
        border-radius: 50%;
        float: left;
        margin: .533333rem .426667rem 0 0;
    }
    #shop .middle{
        float: left;
        line-height: .613333rem;
        margin-top: .266667rem; 
    }
    #shop b{
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) -3.52rem -1.12rem no-repeat;
        background-size: 4rem 4rem;
        float:right;
        /* display: inline-block; */
        width: .266667rem;
        height: .266667rem;
        margin-top: .88rem;
    }
</style>