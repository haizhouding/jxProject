<template>
    <div id="pictureShow" v-if="pictureList">
        <div class="swiper-container">
            <div class="swiper-wrapper ">
                <div class="swiper-slide" 
                v-for="src in pictureList.srcList" 
                :key="src.id" 
                :style="{backgroundImage: 'url(' + src + ')',
                backgroundSize: pictureList.width + ',' + pictureList.height,
                width: pictureList.width ,
                height: pictureList.height}">
                </div>
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
        name: "pictureShow",
        data () {
            return {
                pictureList: null
            }
        },
        mounted() {
            setTimeout(() => {
                new Swiper('.swiper-container', {
                    pagination :{
                        el: '.swiper-pagination',
                        clickable :true
                    },
                    loop: true,
                    observe: true,
                    autoplay: true,
                    notNextTick: true
                    
                });
            }, 500);
            
        },
        created() {
            this.axios.get('http://10.0.157.209:8888/getProduct', {
                params: {
                    id: this.productId
                }
            }).then(res => {
                this.pictureList = res.data.produt.pictureList
            })
        },
        props: ['productId']
    }
</script>
    
<style lang="css" scoped>
    #pictureShow {
        width:100%;
        margin: 0 auto;
    }

</style>