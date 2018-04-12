<template>
    <div>
        <div id="pictureShow">
            <div class="swiper-container">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide" 
                    v-for="src in pictureList.srcList" 
                    :key="src.id"
                    >            
                    <img :src="src" :style="{
                    width: pictureList.width,
                    height: pictureList.height
                    }" />
                    </div>
                </div>
        <!-- Add Pagination -->
                <div class="swiper-pagination"></div>  
            </div>
        </div>
    </div>
</template>
    
<script>
    import Swiper from 'swiper'
    import '../../css/swiper.css'
    export default {
        name: "pictureShow",
        data () {
            return {
                
            };
        },
        mounted() {
            this.$nextTick(function () {
                new Swiper('.swiper-container', {
                    loop: true,
                    observe: true,
                    pagination :{
                        el: '.swiper-pagination',
                        clickable :true
                    },
                });
            })
            
        },
        props:['pictureList']
    }
</script>
    
<style lang="css" scoped>
    #pictureShow {
        width:100%;
        margin: 0 auto;
    }

</style>