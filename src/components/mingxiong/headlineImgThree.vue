<template>
    <div class="headlineImgThree">
       <a href="#" v-for="img in imgList" :key="img">
           <img v-lazy="img" alt="">
       </a>
    </div>
</template>
<script>
export default {
    name: "headlineImgThree",
    data () {
        return {
            imgList: [
                "https://img08.jiuxian.com/bill/2017/0626/fadf1242a5db4fe5869207274414ae10.jpg",
                "https://img08.jiuxian.com/bill/2017/1011/443723aab82f4a1ba1a94f914b889f6b.jpg",
                "https://img07.jiuxian.com/bill/2017/0626/dde98345d3d94333836345e0b7d1e8b3.jpg",
                "https://img06.jiuxian.com/bill/2017/1216/33b278974a4e40d998cc0ce585b69c0d.jpg",
                "https://img06.jiuxian.com/bill/2017/0918/2e16e75d20994b379716d7fa2b2f04eb.jpg",
                "https://img10.jiuxian.com/bill/2017/0626/2e0166456bc341b692c9d3c3a1089fc5.jpg",
                "https://img06.jiuxian.com/bill/2017/0204/135f7adc0c9048c5924cd7147f11db1b.jpg",
                "https://img10.jiuxian.com/bill/2017/0809/2fca31dc6b254d9eb96a042cf8dbf1ea.jpg"
            ]
        };
    }
}
</script>
<style lang="css" scoped>
    img[lazy=loading] {
        width: 4.981333rem;
        background: url('https://m.jiuxian.com/mjava_statics/images/home/loazy_img.png');
        background-size: 4.981333rem;
    }
    .headlineImgThree {
        background-color: #f7f7f7;
    }
    .headlineImgThree a img {
        width: 4.981333rem;
        margin-top: .026667rem;
    }
    .headlineImgThree a:nth-of-type(even) img {
        margin-left: .026667rem;
    }
</style>