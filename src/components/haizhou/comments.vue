<template>
    <div id="comments">
        <h3>商品评价<span>（{{commentsList.totalEval}}人评价）</span> 
         <b>好评度<span>{{commentsList.goodEval}}%</span><i></i></b> </h3>
        <ul>
            <li v-for="proEval in commentsList.proEvalList.slice(0,3)" :key="proEval.id" class="proEval">
                <h4>{{proEval.userName}} <span>酒虫</span>
                <i v-for="star in proEval.star" :key="star.id"></i>
                <time>{{proEval.createTime}}</time></h4>
                <p v-text="proEval.content"></p>
                <img v-for="src in proEval.imageList" :src="src.smallImage" :style="{width:' 2.08rem', height:' 2.08rem'}" alt=""
                :key="src.id">
            </li>
        </ul>
    </div>
</template>
<script>
    import comments from './comments.json'
    export default {
        name: "comments",
        data () {
            return {
                commentsList: {}
            };
        },
        created() {
            this.commentsList = comments;
        }
    }
</script>
<style lang="css" scoped>
    #comments {
        width: 100%;
        padding: 0 .4rem 0 .266667rem;
    }
    #comments h3{
        height: 1.226667rem;
        line-height: 1.226667rem;
        border-bottom: 1px solid #e2e2e2;
    }
     #comments h3>span{
         color: #999999;
         font-size: .293333rem;
     }
     #comments h3 b{
         float: right;
         color: #666666;
     }
     #comments h3 b span{
         color: red;
     }
     #comments h3 b i{
        font-style: normal;
        display: inline-block;
        height: .266667rem;
        width: .266667rem;
         /* background: red; */
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) -3.52rem -1.12rem no-repeat;
        background-size: 4rem 4rem;
     }
     #comments .proEval{
         border-bottom: 1px solid #f0f0f0;
         padding: 0 .266667rem;
     }
     #comments .proEval h4{
         height: .48rem;
         line-height: .48rem;
         margin-top: .346667rem;
         color: #666666;
     }
     #comments .proEval h4 span{
         display: inline-block;
         border: 1px solid #666666;
         width: .96rem;
         text-align: center;
         border-radius: .08rem;
         margin-left: .266667rem;
     }
     #comments .proEval h4 i{
         display: inline-block;
         width: .266667rem;
         height: .266667rem;
         background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) left center no-repeat;
         background-size: 4rem 4rem;
     }

     #comments .proEval h4 time{
         float: right;
     }
     
     #comments .proEval p{
         line-height: .48rem;
         margin: .266667rem 0 .64rem 0;
     }
     #comments .proEval img{
       
         margin-left: .266667rem;
         margin-bottom: .72rem;
     }





</style>