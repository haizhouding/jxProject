<template>
    <div id="coupon" >
        <div class="backColor" v-show='!isShow'></div>
        <div class="cou" @click="show">
            领券
            <span>满1299减70</span>
            <span>满129减70</span>
            <span>满199减70</span>
            <i>&gt;</i>
        </div>
        <div class="cou_info" :class="{show: isShow}">
          <h3>优惠券 <span @click="hidden">X</span></h3>
          <p>可用优惠券</p>
          <ul>
              <li v-for="num in 3" class="couSum" :key="num.id">
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
             isShow: true
        };
    },
    methods: {
        show() {
             this.isShow = false;
        },
        hidden() {
            this.isShow = true;
        }
       
    }
}
</script>
    
<style lang="css" scoped>

    #coupon .cou{
        width: 100%;
        height: 1.12rem;
        line-height: 1.12rem;
        padding-left: .266667rem;
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
        height: 14.266667rem;
        padding:0.1px .266667rem;
        background: #fff;
        color: #666666;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .show {
        top: -17.813333rem;
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
          margin-top: .266667rem;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          border-right: 1px solid #e8e8e8;
          border-radius: .133333rem;
      }
      #coupon .cou_info .couSum:after{
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
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
       #coupon .couSum .left {
           float: right;
           width: 6.32rem;
           height: 2.613333rem;
       }
       #coupon .couSum .left p:first-child{
           width: 4.933333rem;
           line-height: .48rem;
           margin-top: .133333rem;
       }
        #coupon .couSum .left p:first-child span{
            display: inline-block;
            background:#7fa4f0;
            height: .34rem;
            line-height: .34rem;
            color: #fff;
        }
        #coupon .couSum .left p:last-child {
            color: #9d9d9d;
            margin-top: .666667rem;
            line-height: .586667rem;
        }
        #coupon .couSum .left p:last-child a{
            display: inline-block;
            padding: 0 .133333rem;
            border: .053333rem solid #729aed;
            border-radius: .333333rem;
            margin-left: .133333rem;

        }
        .backColor{
            position: fixed;
            top: 0;
            z-index: 998;
            width: 100%;
            height: 100%;
            background:rgba(0, 0, 0, 0.5);
        }
</style>