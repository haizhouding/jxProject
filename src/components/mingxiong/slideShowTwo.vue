<template>
        <div class="slideShowTwo">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="value in imgList" :key="value.id">
                        <img v-bind:src="value" alt="">
                </div>
            </div>
        </div>
</template>
<script>
import Swiper from 'swiper'
import '../../css/swiper.css'
export default {
    name: "slideShowTwo",
    data () {
        return {
            imgList: [
                "https://img06.jiuxian.com/bill/2018/0131/7869d964ea5b41e1ba89ddac355a1667.jpg",
                "https://img07.jiuxian.com/bill/2018/0131/d4188bfb145747c6b6d2f8fc2cc857af.jpg",
                "https://img08.jiuxian.com/bill/2018/0117/4491b8124df24984a8d3c662c871937d.jpg",
                "https://img08.jiuxian.com/bill/2018/0117/4491b8124df24984a8d3c662c871937d.jpg",
                "https://img10.jiuxian.com/bill/2018/0131/d56627a517ef4d638df72fe1855534b7.jpg",
                "https://img07.jiuxian.com/bill/2018/0131/9e00cb8e6f064654b7e4dfea19ee70a2.jpg",
                "https://img08.jiuxian.com/bill/2018/0111/c3b0395699cc4ec2b81535b84cb73c33.jpg",
                "https://img07.jiuxian.com/bill/2018/0122/450219d68b0141ec90c82077c9e407df.jpg",
                "https://img07.jiuxian.com/bill/2018/0131/69754e540c4c484db31c3a8b3baa5845.jpg",
                "https://img10.jiuxian.com/bill/2018/0131/da21ff855ee24c85ad1b1cf6fcb11030.jpg",
                "https://img07.jiuxian.com/bill/2018/0122/df3ef39504f24a9199d3d8537b6dbce8.jpg",
                "https://img08.jiuxian.com/bill/2018/0122/d94ad9319cb345e08a1316bf41031b4a.jpg"
            ]
        };
    },
    mounted() {
        setTimeout(function () {
            new Swiper('.slideShowTwo', {
                observe: true,
                slidesPerView : 2.5,
            });
        }, 500)  
    },
}
</script>
<style lang="css" scoped>
    .slideShowTwo>div{
        width: 48rem;
        /* display: flex; */
        margin-bottom: 1px;
    }
    .slideShowTwo>div>div {
        width: 4rem;
    }
    img {
        width: 4rem;
    }
</style>