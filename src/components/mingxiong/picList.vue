<template>
    <div class="picList">
       <div>
           <a href="#" v-for="value in imgList1" :key="value">
               <img v-bind:src="value" alt="">
           </a>
       </div>
        <div>
           <a href="#" v-for="value in imgList2" :key="value">
               <img v-bind:src="value" alt="">
           </a>
       </div>
       <a href="#">
           <img src="https://img10.jiuxian.com/bill/2018/0130/d0c6890743a142c88dd406cdca60038f.jpg" alt="">
       </a>
       <div>
           <a href="#">
               <img src="https://img06.jiuxian.com/bill/2018/0130/69660993d37040e6a4ebd2ecb5a07ac1.jpg" alt="">
           </a>
           <a href="#">
               <img src="https://img10.jiuxian.com/bill/2018/0130/388d0021322448e2811d9d01eca0eb79.jpg" alt="">
           </a>
       </div>
       <div>
           <img src="https://img09.jiuxian.com/bill/2017/1109/acb646caea3d4325b3664c9142852543.jpg" alt="">
           <p>年货节  礼盒会场   五折秒杀礼盒！</p>
       </div>
       <div>
           <h3>掌上秒拍
               <span>距结束</span>
               <span class="timeSpan">00</span> : 
               <span class="timeSpan">33</span> : 
               <span class="timeSpan">13</span>
           </h3>
           <p>更多商品等你来抢!
               <span>&gt;</span>
           </p>
       </div>
       <hr />
    </div>
</template>
<script>
export default {
    name: "picList",
    data () {
        return {
            imgList1: [
                "https://img09.jiuxian.com/bill/2018/0130/03f9261235ab4fb8adc7f9320fcf621b.jpg",
                "https://img09.jiuxian.com/bill/2018/0130/d669dbd064ca47c4a4190f97e4b437cd.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/6e9099b1d2bf4fc3bd4fe0e1d58207c2.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/5ffb21e7f75a4acda2c77bb54f9009c6.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/cc63b34b08704202be62b99652c15933.jpg"
            ],
            imgList2: [
                "https://img08.jiuxian.com/bill/2018/0130/cc95bd65100d4ec1aee95d5b4b937bce.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/5dec0a72dbf84bc887385b766989830a.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/466942e40cbd418cb9f7f5563f809bd8.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/2dd158a427e141b09caa0bc042d208c5.jpg",
                "https://img07.jiuxian.com/bill/2018/0130/fcb238c0a2664c1a9f786473727fda5f.jpg"
            ]
        };
    }
}
</script>
<style lang="css" scoped>
    .picList{
        width: 10rem;
        margin-top: 1px;
        /* background-color: purple; */
    }
    .picList div img {
        width: 2rem;
    }
    .picList>a img {
        width: 10rem;
    }
    .picList div:nth-of-type(3) {
        display: flex;
    }
    .picList div:nth-of-type(3) a img {
        width: 5rem;
    }
    .picList div:nth-of-type(4) {
        height: 1.066667rem;
        width: 10rem;
        display: flex;
    }
    .picList div:nth-of-type(4) img {
        width: 2.266667rem;
        height: .48rem;
        margin: .266667rem;
    }   
    .picList div:nth-of-type(4) p{
        height: .533333rem;
        line-height: .533333rem;
        margin-top: .266667rem;
        padding-left: .32rem; 
        border-left: 1px solid #ededed;
    } 
    .picList div:nth-of-type(5) {
        display: flex;
        width: 9.333333rem;
        margin: 0 auto;
        justify-content: space-between;
    }
    .picList div:nth-of-type(5) h3 span{
        color: #666666;
    }
    .picList div:nth-of-type(5) h3 .timeSpan {
        display: inline-block;
        width: .533333rem;
        height: .426667rem;
        border-radius: .053333rem;
        color: #fff;
        background-color: #858585;
        text-align: center;
        padding: 0 .08rem;
    }
    .picList div:nth-of-type(5) p{
        color: #999999;
    }
    .picList div:nth-of-type(5) p span{
        display: inline-block;
        width: .4rem;
        height: .43rem;
        background-color: #858585;
        border-radius: 50%;
        text-align: center;
        line-height: .43rem;
        color: #fff;
        font-family: 黑体;
        margin-left: .32rem;    
    }
</style>