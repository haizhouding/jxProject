<template>
    <div class="picList">
       <div>
           <a href="#" v-for="value in imgList1">
               <img v-bind:src="value" alt="">
           </a>
       </div>
        <div>
           <a href="#" v-for="value in imgList2">
               <img v-bind:src="value" alt="">
           </a>
       </div>
       <a href="#">
           <img src="https://img10.jiuxian.com/bill/2018/0130/d0c6890743a142c88dd406cdca60038f.jpg" alt="">
       </a>
       <div>
           <a href="#">
               <img src="https://img06.jiuxian.com/bill/2018/0130/69660993d37040e6a4ebd2ecb5a07ac1.jpg" alt="">
           </a>
           <a href="#">
               <img src="https://img10.jiuxian.com/bill/2018/0130/388d0021322448e2811d9d01eca0eb79.jpg" alt="">
           </a>
       </div>
       <p></p>
    </div>
</template>
<script>
export default {
    name: "picList",
    data () {
        return {
            imgList1: [
                "https://img09.jiuxian.com/bill/2018/0130/03f9261235ab4fb8adc7f9320fcf621b.jpg",
                "https://img09.jiuxian.com/bill/2018/0130/d669dbd064ca47c4a4190f97e4b437cd.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/6e9099b1d2bf4fc3bd4fe0e1d58207c2.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/5ffb21e7f75a4acda2c77bb54f9009c6.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/cc63b34b08704202be62b99652c15933.jpg"
            ],
            imgList2: [
                "https://img08.jiuxian.com/bill/2018/0130/cc95bd65100d4ec1aee95d5b4b937bce.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/5dec0a72dbf84bc887385b766989830a.jpg",
                "https://img10.jiuxian.com/bill/2018/0130/466942e40cbd418cb9f7f5563f809bd8.jpg",
                "https://img08.jiuxian.com/bill/2018/0130/2dd158a427e141b09caa0bc042d208c5.jpg",
                "https://img07.jiuxian.com/bill/2018/0130/fcb238c0a2664c1a9f786473727fda5f.jpg"
            ]
        };
    }
}
</script>
<style lang="css" scoped>
    .picList{
        width: 10rem;
        margin-top: 1px;
        height: 10.4rem;
        /* background-color: purple; */
    }
    .picList div img {
        width: 2rem;
    }
    .picList>a img {
        width: 10rem;
    }
    .picList div:nth-of-type(3) {
        display: flex;
    }
    .picList div:nth-of-type(3) a img {
        width: 5rem;
    }
</style>