<template>
    <div class="headlineList">
        <img :src="imgList[id]" alt="">
    </div>
</template>
<script>
export default {
    name: "headlineList",
    data () {
        return {
            imgList: [
                "https://img07.jiuxian.com/bill/2017/0321/18c109eff15d43cbba20498a6e24d8e0.jpg",
                "https://img08.jiuxian.com/bill/2017/0321/2ccef5fad18a4e43a833fe29a5924f05.jpg",
                "https://img09.jiuxian.com/bill/2017/0321/25f63a308e5e4292b506bfdf9cda1f02.jpg",
                "https://img07.jiuxian.com/bill/2017/0321/f795eddebe44484fa809b429a74b0612.jpg",
                "https://img10.jiuxian.com/bill/2017/0321/32ddf14f0e4b4b689fa5c17dd3da5b07.jpg",
                "https://img07.jiuxian.com/bill/2017/0321/1746c9c0000e42d2be988597189eb184.jpg"
            ]
        }
    },
    props: ['id']
}
</script>
<style lang="css" scoped>
    .headlineList img{
        width: 10rem;
    }
</style>