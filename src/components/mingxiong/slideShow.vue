<template>
    <div class="slideShow swiper-container">
        <div class="swiper-wrapper">
            <div v-for="value in imgList" :key="value" class="swiper-slide">
                <img :src="value" alt="">
            </div>
        </div>
        <div class="swiper-pagination">
            
        </div>
    </div>

</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: "slideShow",
    data () {
        return {
            timeId: null,
            imgid: 0,
            imgList: [
                "https://img09.jiuxian.com/bill/2018/0130/6882d20799fc471b929abacde1005371.jpg",
                "https://img06.jiuxian.com/bill/2018/0131/aabca6ead521421c8c2377e1a16d9480.jpg",
                "https://img07.jiuxian.com/bill/2018/0130/6b81b4a39146436ebf6ec66922e6d860.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/41136c732eae4a988b01f9fd3a1380cb.jpg",
                "https://img09.jiuxian.com/bill/2018/0130/b0c61348b8364027977f7a3e753dcbc2.jpg",
                "https://img08.jiuxian.com/bill/2018/0122/bbdec61bee1647f6be6af82193b466b6.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/4e469bb7fec042b89ea1a2b7fe536e21.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/b13631ce115c420c8274bf1be995f257.jpg",
                "https://img06.jiuxian.com/bill/2018/0129/9574bec32b644cd3b15e1f130c3d571f.jpg"
            ],
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true
        });
    },
    methods: {
        
    }
}
</script>
<style lang="css" scoped>
    .slideShow{
        width: 10rem;
        overflow: hidden;
        background-color: red;
    }
    .slideShow div{
        width: 90rem;
        height: 4.8rem;
        display: flex;
    }
    .slideShow div img {
        width: 10rem;
        height: 4.8rem;
    }
</style>