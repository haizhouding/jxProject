<template>
    <div class="picTwo">
       <a href="#" v-for="img in imgList" :key="img">
           <img :src="img">
       </a>
    </div>
</template>
<script>
export default {
    name: "picTwo",
    data () {
        return {
            imgList: [
                "https://img07.jiuxian.com/bill/2018/0201/87f358ee7a794aea8b015e81dc25435f.jpg",
                "https://img10.jiuxian.com/bill/2018/0125/cb7059371fe64599aae95358a5e19604.jpg",
                "https://img06.jiuxian.com/bill/2018/0118/918c8a20a6c743ebb5fed078cf58b4a2.jpg"
            ]
        };
    }
}
</script>
<style lang="css" scoped>
    .picTwo {
        clear: both;
        margin: .266667rem 0;
    }
    .picTwo img {
        float: left;
    }
    .picTwo a:first-of-type img{
        width: 4.933333rem;
    }
    .picTwo a:nth-of-type(2) img{
        width: 5.066667rem;
    }
    .picTwo a:nth-of-type(3) img{
        margin-top: .08rem;
        width: 5.066667rem;
    }
</style>