<template>
    <div class="slidePicture">
        <figure v-for="value in imgList">
            <img src="https://img07.jiuxian.com/2018/0125/238888580d9b438eaa2806e2a94b2b4a4.jpg" alt="">
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
        background-color: red;
        display: flex;
        justify-content: space-between;
    }
    .slidePicture figure{
        width: 2.8rem;
        height: 4.533333rem;
        background-color: pink;
    }
    .slidePicture figure img {
        width: 2.666667rem;
        height: 2.533333rem;
    }
</style>