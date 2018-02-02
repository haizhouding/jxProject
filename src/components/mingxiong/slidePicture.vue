<template>
   <div id="PictureShow">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="num in 10" :key="num">{{ num }}</div>
            </div>
    <!-- Add Pagination -->
             <div class="swiper-pagination"></div>
        </div>
    </div>
    
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
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
      new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true
            });
    },
}
</script>
<style lang="css" scoped>
    .slidePicture {
        width: 29.333333rem;
    }
    .slidePicture div{
        width: 2.933333rem;
    }
    .slidePicture img {
        width: 2.933333rem;
    }
</style>