<template>
    <div id="detail">
        <header-bar :msg='msg' class="header"></header-bar>
        <router-view></router-view>
        <bottom-bar ></bottom-bar>
        <div class="toTop" v-show="is_show" @click="toTopFn"></div>
    </div>  
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import bottomBar from './bottomBar'
import contents from './contents'
// import productLists from './json/product.json'

export default {
    name: "detail",
    data () {
        return {
             msg: '商品详情',
             is_show: false
        }
    },
    components:{
        HeaderBar, 
        bottomBar,
        contents
    },
    created() {
        window.addEventListener('scroll', this.scrollFn, false);
    },
    methods: {
        scrollFn() {
            var scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 200) {
                this.is_show = true
            } else {
                this.is_show = false
            }
        },
        toTopFn() {
            var time = setInterval(function() {
                document.documentElement.scrollTop -= 100;
                if (document.documentElement.scrollTop == 0 ) {
                    clearInterval(time);
                }
            }, 5)



        }
    }
}
</script>
    
<style lang="css" scoped>
    .header{
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 10rem;
    }
    #detail .toTop{
        position: fixed;
        bottom: 10%;
        right: 10%;
        width: 1.2rem;
        height: 1.2rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png)  -2.56rem -.16rem no-repeat;
        background-size: 4rem 1.466667rem;
    }
</style>