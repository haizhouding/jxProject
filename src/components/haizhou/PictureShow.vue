<template>
    <div id="PictureShow">
        <div class="swiper-container">
            <div class="swiper-wrapper">
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
    import productLists from './json/product.json'
    import Swiper from 'swiper'
    import '../../css/swiper.css'
    export default {
        name: "pictureShow",
        data () {
            return {
                pictureList: null
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                 pagination :{
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop: true,
                observe: true
            });
        },
        created() {
            for (var product of productLists) {
                if( product.productId == this.productId) {
                    this.pictureList = product.pictureList;
                }
            }
        },
        props: ['productId']
    }
</script>
    
<style lang="css" scoped>
    #PictureShow {
        width:100%;
        margin: 0 auto;
    }

</style>