<template>
        <div class="swiper-container slidePicture">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="img in imgList" :key="img.id">
                <img :src="img.proImg" alt="">
                <p>{{ img.proName }}</p>
                <p>￥{{ img.proPrice | keepDecimal }}</p>
                <p>￥{{ img.jxPrice | keepDecimal }}</p>
                </div>
            </div>
        </div>
     
</template>
<script>

export default {
    name: "slidePictrue",
    data () {
        return {
            imgList: null,
            msg: ''
        };
    },
    created() {
        this.axios.get("http://10.0.157.231:8888/getMiaopai")
            .then(res => {
                this.imgList = res.data.killProList
            })
    },
    filters: {
        keepDecimal(value) {
            return value.toFixed(2)
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="css" scoped>
    .slidePicture>div {
        width: 29.333333rem;
    }
    .slidePicture>div>div {
        width: 2.933333rem;
        /* height: 4.666667rem; */
    }
    img{
        width: 2.933333rem;
    }
    p {
        /* line-height: .533333rem; */
    }
    p:nth-of-type(1) {
        color: #252525;
    }
    p:nth-of-type(2) {
        color: #fc5a5a;
    }
    p:nth-of-type(3) {
        color: #999999;
        text-decoration: line-through;
    }
</style>