<template>
    <div class="slidePicture">
        <figure v-for="num in 4" :key="num">
            <a href="#">
                <img src="https://img07.jiuxian.com/2018/0125/238888580d9b438eaa2806e2a94b2b4a4.jpg" alt="">
            </a>
            <p>酒的详细信息以后ajax请求</p>
            <p>酒的现价</p>
            <p>酒的原价</p>
        </figure>
    </div>
</template>
<script>
export default {
    name: "slidePictrue",
    data () {
        return {
            imgList: [1,2,3,4]
        };
    }
}
</script>
<style lang="css" scoped>
    .slidePicture{
        width: 10rem;
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
        /* flex-wrap: wrap; */
    }
    .slidePicture figure{
        width: 2.933333rem;
        margin: 0;
        padding: 0;
    }
    .slidePicture figure img {
        width: 2.133333rem;
        height: 1.866667rem;
        margin: 0 auto;
        display: block;
        margin-bottom: .266667rem;
    }
    .slidePicture figure p {
        padding-left: .266667rem;
    }
    .slidePicture figure p:nth-of-type(2) {
        color: #fc5a5a;
        margin: .133333rem 0 0 0;
        line-height: .426667rem;
    }
    .slidePicture figure p:nth-of-type(3) {
        color: #a5c2eb;
        text-decoration: line-through;
        line-height: .426667rem;
        margin-bottom: .266667rem;
    }
</style>