<template>
    <div class="headerTop">
       <div>
           <span></span>
           <div>
               <span></span>
               <input type="text">
           </div>
           <span>搜索</span>
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