<template>
    <div class="headerTop">
       <div>
           <span></span>
           <div>
               <img src="" alt="">
               <input type="text">
           </div>
           <p>搜索</p>
       </div>
       <span v-show="isFlag" @click="reversFn"></span>
    </div>
</template>
<script>
export default {
    name: "headerTop",
    data () {
        return {

        }
    },
    methods: {
        reversFn() {
            var num;
            if (document.documentElement.scrollTop) {
                var time = setInterval(function () {
                    document.documentElement.scrollTop -= 100
                    if (document.documentElement.scrollTop == 0 ) {
                        clearInterval(time)  
                    }
                }, 5)
            } else if (window.pageYOffset) {
                var time = setInterval(function () {
                    window.pageYOffset -= 100
                    if (window.pageYOffset == 0 ) {
                        clearInterval(time)  
                    }
                }, 5)
            } else {
                var time = setInterval(function () {
                    document.body.scrollTop -= 100
                    if (document.body.scrollTop == 0 ) {
                        clearInterval(time)  
                    }
                }, 5)
            }

        },
        timeFN (height) {

        }
    },
    props: ['isFlag']
}
</script>
<style lang="css" scoped>
    .headerTop>div {
        width: 100%;
        height: 1.066667rem;
        background-color: rgba(231, 52, 61, 0.9);
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        display: flex;
        padding-top: .16rem;
    }
    .headerTop>div>span {
        width: 1.52rem;
        height: .72rem;
        margin: 0 .24rem 0 .266667rem;
        background: url('https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png') no-repeat -.1rem top;
        background-size: 5.3rem;
        border-radius: .08rem;
    }
    .headerTop>div>div {
        border-radius: .08rem;
        display: flex;
        /* border: #fff solid 1px; */
        height: .72rem;
    }
    .headerTop>div>div>img {
        width: .666667rem;
        height: .666667rem;
        background: #fff url('https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png') no-repeat -1.56rem .15rem;
        background-size: 5.3rem;
    }
    .headerTop>div>div>input {
        width: 6.453333rem;
        height: .666667rem;
        border: 0;
    }
    .headerTop>div>p {
        width: 1.333333rem;
        color: #fff;
        text-align: center;
        line-height: .666667rem;
    }
    .headerTop>span{
        position: fixed;
        bottom: 3rem;
        right: .533333rem;
        background: url('https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png') right -5px;
        background-size: 4rem;
        width: 1.533333rem;
        height: 1.333333rem;
        display: block;
        border-radius: 50%;
    }
    
</style>