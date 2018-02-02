<template>
    <div id="coupon">
        <div class="cou">
            领券
            <span>满1299减70</span>
            <span>满129减70</span>
            <span>满199减70</span>
            <i>&gt;</i>
        </div>
        <div class="cou_info">
          <h3>优惠券 <span>X</span></h3>
          <p>可用优惠券</p>
          <ul>
              <li v-for="num in 3" class="couSum">
                  <div class="right">
                      <p><span>￥</span>79</p>
                      <p>满1299元可用</p>
                  </div>
                  <div class="left">
                      <p><span>满减</span>1299-70【朗格玛缔官方旗舰店专用】（酒友们春节快乐！）</p>
                      <p class="t">2018.01.31-2018.02.13<a href="javascript:;">立即领取</a></p>
                  </div>
              </li>
          </ul>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "coupon",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    #coupon .cou{
        width: 100%;
        height: 1.12rem;
        line-height: 1.12rem;
        padding-left: .266667rem;
        background: url()
    }
    #coupon .cou span{
        display: inline-block;
        height: .48rem;
        border: #fc5a5a;
        line-height: .426667rem;
        margin-right: .266667rem;
        border-top: 1px solid #fc5a5a;
        border-bottom: 1px solid #fc5a5a;
        color: #fc5a5a;
        padding: 0 .186667rem;
        background-image: url(https://m.jiuxian.com/mjava_statics/images/coupon/con_1.png), url(https://m.jiuxian.com/mjava_statics/images/coupon/con_2.png);
       /* url(https://m.jiuxian.com/mjava_statics/images/coupon/con_2.png) right center no-repeat; */
        background-repeat: no-repeat, no-repeat;
        background-position: left center, right center;
        background-size: .106667rem .48rem, .106667rem .48rem;
        background-color: #000000;
        background-color: #fff1f1;
    }
    #coupon .cou span:first-of-type{
        margin-left: .666667rem;
    }
    #coupon .cou i{
        font-family: 黑体;
        font-style: normal;
        float: right;
        margin-right: .4rem;
    }
    #coupon .cou_info {
        width: 100%;
        height: 10rem;
        background: pink;
        padding:0.1px .266667rem;
        color: #666666;
    }
     #coupon .cou_info h3 {
         font-size: .426667rem;
         text-align: center;
         margin-top: .666667rem;
     }
      #coupon .cou_info h3 span{
          float: right;
          font-weight: normal;
         
      }
      #coupon .cou_info .couSum{
          clear: both;
      }
      #coupon .cou_info .couSum .right{
          height: 2.666667rem;
          width: 2.986667rem;
          float: left;
          background: url(https://m.jiuxian.com/mjava_statics/images/coupon/manjianBg.png) left center no-repeat;
          background-size: 2.986667rem 2.666667rem;
          color: white;
          text-align: right;
          padding: .48rem .453333rem 0 0;
      }
      #coupon .couSum .right p:first-child{
          font-size: .533333rem;
          font-weight: blod;
          line-height: 1.333333rem;
      }
      #coupon .couSum .right p:first-child span {
          font-size: .266667rem;
      }
</style>