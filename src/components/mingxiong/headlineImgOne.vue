<template>
    <div class="headlineImgOne">
       <a href="#" v-for="img in imgList" :key="img">
           <img :src="img" alt="">
       </a>
    </div>
</template>
<script>
export default {
    name: "headlineImgOne",
    data () {
        return {
            imgList: [
                "https://img09.jiuxian.com/bill/2018/0112/6b8aed2cd5084c7390c08f5918744dfc.jpg",
                "https://img07.jiuxian.com/bill/2017/1216/7c263951ea5a4a83b077309ff9eb6529.jpg",
                "https://img08.jiuxian.com/bill/2017/1214/eb7f77dfc3ff4964a0669b03f07e6509.jpg",
                "https://img06.jiuxian.com/bill/2017/1214/3d0e1dcef449443699ad559bcfc6f510.jpg",
                "https://img08.jiuxian.com/bill/2018/0127/4e1d9b797bc349f7a447b40da72c494a.jpg"
            ]
        };
    }
}
</script>
<style lang="css" scoped>
    .headlineImgOne{
        background-color: #f7f7f7;
    }
    .headlineImgOne a img{
        margin-top: .053333rem;
    }
    .headlineImgOne a:nth-of-type(1)  img{
        width: 4.986667rem;
        margin-left: .026667rem;
    }  
    .headlineImgOne a:nth-of-type(2)  img{
        width: 4.986667rem;
    }
    .headlineImgOne a:nth-of-type(3)  img{
        width: 3.306667rem;
    }
    .headlineImgOne a:nth-of-type(4)  img{
        width: 3.306667rem;
      
    }
    .headlineImgOne a:nth-of-type(4) {
        margin: .026667rem .026667rem 0;
    }
    .headlineImgOne a:nth-of-type(5)  img{
        width: 3.333333rem;
    }
</style>