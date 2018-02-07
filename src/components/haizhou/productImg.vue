<template>
    <div id="productImg" v-if="img">
       <div class="prodDet">
            <h3>
                <i></i>产品特点
            </h3>
        </div>
        <img v-for="src in img.advImgList" :key="src.id" v-lazy="src" 
        :style="{'width': '100%'}" alt="">
        <div class="factory">
            <h2>&nbsp;</h2>
            <h2><strong>保证茅台集团(酒厂)白金酒有限责任公司</strong></h2>
            <h2><strong>承诺假一赔十。</strong></h2>
            <h2><strong>生产地址：贵州遵义仁怀市茅台镇国酒社区</strong></h2>
            <h2><strong>【每箱附三个手提袋】</strong></h2>
        </div>
        <img v-for="src in img.prodcImgList" :key="src.id" :src="src" 
        :style="{'width': '100%'}" alt="">
        
    </div>
</template>
<script>
export default {
    name: "productImg",
    data () {
        return {
            img: null
        };
    },
    created() {
         this.axios.get('http://10.0.157.209:8888/getProduct', {
            params: {
                id: this.productId
            }
        }).then(res => {
            this.img = res.data.produt.imgList
        })
    },
    props: ['productId']
}
</script>
<style lang="css" scoped>
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        background: yellow;
    }
    #productImg .prodDet {
        width: 100%;
        margin-top: .266667rem;
        padding: 0 .266667rem;
    }
    #productImg .prodDet h3 {
        line-height: .666667rem;
        height: .666667rem;
        background: url(https://m.jiuxian.com/mjava_statics/images/prodInfoBg.jpg);
        margin-bottom: .266667rem;
        color: #848484;

    }
    #productImg .prodDet h3 i{
        display: inline-block;
        width: .213333rem;
        height: .213333rem;
        background: #b00000;
        margin-right: .213333rem;
    }
    #productImg .factory{
        padding-left: .266667rem;
        color: #848484;
        line-height: .56rem;
    }
    #productImg img:last-child{
        margin-bottom: 1.146667rem;
    }
</style>