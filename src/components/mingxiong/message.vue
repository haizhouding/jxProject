<template>
    <div class="message">
        <div v-for="(pic, index) in imgList" :key="pic.id" :id="index">
            <p>
                <span v-for="value in pic.promo" :key="value.id" v-if="value.name"
                :style="{
                    backgroundColor: value.backColor,
                    color: value.wordColor
                }">{{ value.name }}</span>
            </p>
            <img  :src="pic.commonProductInfo.imgPath" alt="">
            <p v-add>{{ pic.commonProductInfo.pname}}</p><p>asdasd</p>
            <p>
                <span>￥{{ pic.commonProductInfo.jxPrice | keepDecimal }}</span>
                <span>￥{{ pic.commonProductInfo.actPrice | keepDecimal }}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "message",
    data () {
        return {
            
        };
    },
    directives: {
       'add': {
           inserted(el, binding) {
               var text = el.innerHTML
               var text1 = text.slice(0, 12)
               el.innerHTML = text1
               var text2 = text.slice(12, 50)
               el.nextSibling.innerHTML = text2
           }
       }
    },
    props: ['imgList'],
    filters: {
        keepDecimal(value) {
            return value.toFixed(2)
        }
    }
}
</script>
<style lang="css" scoped>
    .message {
        background-color: #f3f5f6;
        overflow: hidden;
    }
    .message>div{
        float: left;
        width: 4.96rem;
        height: 6.453333rem;
        margin-top: .053333rem;
        background-color: #fff;
    }
    .message>div:nth-of-type(odd) {
        margin-right: .08rem;
    }
    .message>div>p:nth-of-type(1) {
        margin-top: .133333rem;
    }
    .message>div>p:nth-of-type(1) span {
        margin-top: .133333rem;
        margin-left: .103333rem;
        line-height: .48rem;
        height: .48rem;
        text-align: center;
        padding: 0 .133333rem;
        border-radius: .08rem;
    }
    .message>div img {
        width: 4rem;
        margin: 0 auto;
        display: block;
    }
    .message>div>p:nth-of-type(2),.message>div>p:nth-of-type(3),.message>div>p:nth-of-type(4) {
        width: 4rem;
        margin: 0 auto;
        line-height: .533333rem;
    }
    .message>div>p:nth-of-type(2) {
        text-align: center;
    }
    .message>div>p:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .message>div>p:nth-of-type(4) span:first-of-type {
        font-size: .373333rem;
        color: #fc7ebb;
    } 
    .message>div>p:nth-of-type(4) span:last-of-type {
        color: #999999;
        text-decoration: line-through;
    }
</style>