<template>
    <div id="productIntro">
        <div class="detailTil">原料</div>
        <div class="detailInfo">水、高粱、小麦</div>
        <div class="detailTil">储藏条件</div>
        <div class="detailInfo">密封，放置于阴凉、干燥处，避免阳光直射。</div>
        <div class="detailTil">贮藏条件</div>
        <div class="detailInfo">密封，放置于阴凉、干燥处，避免阳光直射。</div>
        <div class="detailTil">酒厂</div>
        <div class="detailInfo">贵州茅台酒厂(集团)白金酒有限责任公司</div>
        <div class="detailTil">箱规</div>
        <div class="detailInfo">1*6</div>
        <div class="detailTil">净含量</div>
        <div class="detailInfo">425mlx6</div>
    </div>
</template>
<script>
export default {
    name: "productIntro",
    data () {
        return {
        };
    }
}
</script>
<style lang="css" scoped>
    #productIntro{
        width: 100%;
        padding-left: .266667rem;
        line-height: .666667rem ;
        overflow: hidden;
    }
 
    #productIntro .detailTil{
        float: left;
        width: 28%;
        color: #999999;
    }
    #productIntro .detailInfo{
        float: left;
        width: 70%;
    }
</style>