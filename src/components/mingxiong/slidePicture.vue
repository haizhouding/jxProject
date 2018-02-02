<template>
    <div class="slidePicture">
        <figure v-for="value in imgList" :key="num">
            <a href="#">
                <img :src="value.proImg" alt="">
            </a>
            <p>{{ value.proName }} {{ msg }}</p>
            <p>￥{{ value.proPrice | keepDecimal}}</p>
            <p>￥{{ value.jxPrice | keepDecimal}}</p>
        </figure>
    </div>
</template>
<script>
export default {
    name: "slidePictrue",
    data () {
        return {
            imgList: null
        };
    },
    created() {
        this.axios.get("http://localhost:8888/getMiaopai")
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
    .slidePicture{
        width: 10rem;
        display: flex;
        justify-content: space-between;
    }
    .slidePicture figure{
        margin: 0;
        padding: 0;
    }
    .slidePicture figure a {
        width: 2.933333rem;
        display: block;
    }
    .slidePicture figure img {
        width: 2.933333rem;
        display: block;
    }
    .slidePicture figure p {
        padding-left: .266667rem;
        text-align: center;
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
        /* margin-bottom: .266667rem; */
    }
</style>