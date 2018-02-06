<template>
    <div>
        <div class="slidePicture">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="img in imgList" 
                    :key="img.id"
                    >            
                    <img :src="img.proImg"/>
                    <p v-add>{{ img.proName }}</p><p>a</p>
                    <p>￥{{ img.proPrice | keepDecimal }}</p>
                    <p>￥{{ img.jxPrice | keepDecimal }}</p>
                </div>
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
                imgList: null
            }
        },
        directives: {
            'add': {
                inserted(el, binding) {
                    var text = el.innerHTML
                    var text1 = text.slice(0, 9)
                    el.innerHTML = text1
                    var text2 = text.slice(10, 50)
                    el.nextSibling.innerHTML = text2
                }
            }
       },
        mounted() {
            setTimeout(function () {
                new Swiper('.slidePicture', {
                    observe: true,
                    slidesPerView : 3.5,
                });
            }, 500)       
        },
        created() {
            this.axios.get("http://10.0.157.209:8888/getMiaopai")
                .then(res => {
                    this.imgList = res.data.killProList
                })
        },
        filters: {
            keepDecimal(value) {
                return value.toFixed(2)
            }
        }
    }  
</script>   
<style lang="css" scoped>
    .slidePicture>div {
        width: 29.333333rem;
        display:  flex;
    }
    .slidePicture>div>div {
        width: 2.933333rem;
    }
    img{
        width: 2.933333rem;
    }
    p {
        width: 2.933333rem;
    }
    p:nth-of-type(1) {
        color: #252525;
    }
    p:nth-of-type(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p:nth-of-type(3) {
        color: #fc5a5a;
    }
    p:nth-of-type(4) {
        color: #999999;
        text-decoration: line-through;
    }
</style>