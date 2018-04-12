<template>
    <div class="headlineImgTwo">
       <a href="#" v-for="img in imgList[index]" :key="img.id">
           <img :src="img" alt="">
       </a>
       <div>
           <a href="#" v-for="pic in picList[index]" :key="pic.id">
               <img :src="pic" alt="">
           </a>
       </div>
    </div>
</template>
<script>
export default {
    name: "headlineImgTwo",
    data () {
        return {
            imgList: [
               [
                   "https://img06.jiuxian.com/bill/2017/1215/2e03253e2e254b1fa1b5916b8fe8a18a.jpg",
                   "https://img07.jiuxian.com/bill/2017/1012/3bf4e6b6941a46228f08ad09dc066481.jpg",
                   "https://img10.jiuxian.com/bill/2017/0725/858903d967dc4e42bdb03bc9396f9d8f.jpg",
                   "https://img06.jiuxian.com/bill/2017/0718/0a75676d009f49efa7bdf16d48457dfd.jpg"
               ],
               [
                   "https://img06.jiuxian.com/bill/2018/0130/955b36d739994fe9900be267ce96f85f.jpg",
                   "https://img07.jiuxian.com/bill/2018/0123/efdf8f2e7017406fb11c35977122e165.jpg",
                   "https://img07.jiuxian.com/bill/2018/0123/e3093e94a7fa4eea80ecc5e4e9f404d9.jpg",
                   "https://img06.jiuxian.com/bill/2018/0123/792372cf6fb34a0598971baa73d64807.jpg"
               ],
               [
                   "https://img09.jiuxian.com/bill/2018/0112/41bafaa2472148d59a91bbb809771bd4.jpg",
                   "https://img07.jiuxian.com/bill/2017/0721/ffb8f51a38cb4834a2652a121b93fe24.jpg",
                   "https://img10.jiuxian.com/bill/2017/0721/08a16421646b4ceabfbaa50cadf5dff0.jpg",
                   "https://img06.jiuxian.com/bill/2017/1106/ffcac15696f5448984a8d01415a1d037.jpg"
               ],
               [
                   "https://img09.jiuxian.com/bill/2017/0623/64cca66ad7c44422aaf5145d3f44e40a.jpg",
                   "https://img10.jiuxian.com/bill/2017/1023/f15ec4eda2604a82b81c67d96ccc160a.jpg",
                   "https://img08.jiuxian.com/bill/2017/1116/64040f9586994448abb2a97a17b5acdb.jpg",
                   "https://img08.jiuxian.com/bill/2017/0509/93d25a3e3d35496291a6b4f60d1ef22a.jpg"
               ]
            ],
            picList: [
                [
                    "https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg",
                    "https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg",
                    "https://img09.jiuxian.com/bill/2016/1118/9831224523a6477a8b6f9661e5daa64b.jpg",
                    "https://img10.jiuxian.com/bill/2016/1118/8f58d3feba1145ae960e0644a284ea8f.jpg",
                    "https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg"
                ],
                [
                    "https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg",
                    "https://img07.jiuxian.com/bill/2016/1214/01d3da4a53414f23a4627cb592dcb023.jpg",
                    "https://img06.jiuxian.com/bill/2016/1214/65187714191e4f64b7b446d459a49f6c.jpg",
                    "https://img07.jiuxian.com/bill/2016/1214/fc002201fee649388b5df6014104ffd0.jpg",
                    "https://img09.jiuxian.com/bill/2016/1118/70ee4f867da64aebadc5b0791c80217e.jpg"
                ],
                [
                    "https://img10.jiuxian.com/bill/2016/1214/5051c53be5404ab29aada67cc521a258.jpg",
                    "https://img06.jiuxian.com/bill/2016/1214/83557b78c1aa4f668b0ae01a902753d5.jpg",
                    "https://img07.jiuxian.com/bill/2016/1214/b2e5ccfb7b66428ba485cc71b084b129.jpg",
                    "https://img06.jiuxian.com/bill/2016/1214/cfc1ffacb8f8432d996ee3c1a10d59f5.jpg",
                    "https://img09.jiuxian.com/bill/2016/1214/1d7119a5956e4cc5bf07d0ca7b8b455a.jpg"
                ],
                [
                    "https://img09.jiuxian.com/bill/2016/1118/85506fcd72c44e9199212d08ff768759.jpg",
                    "https://img06.jiuxian.com/bill/2017/0901/bc3baa1f3a96492bb5eb44ac8f8a9035.jpg",
                    "https://img08.jiuxian.com/bill/2016/1118/6436d8b38d09436ea7809ce0b98e8c0d.jpg",
                    "https://img10.jiuxian.com/bill/2017/1017/d6a7fb7162e44f11ad43aab5624845bf.jpg",
                    "https://img10.jiuxian.com/bill/2016/1118/052d700ebd624fb8ae1ab4ea9207f631.jpg"
                ]
            ]
        };
    },
    props: ['index']
}
</script>
<style lang="css" scoped>
    .headlineImgTwo{
        background-color: #f1f1f1;
    }
    .headlineImgTwo>a img {
        float: left;
        margin-top: .053333rem;
    }
    .headlineImgTwo>a:nth-of-type(1) img {
        width: 3.866667rem;
    }
    .headlineImgTwo>a:nth-of-type(2) img {
        margin-left: .026667rem;
        width: 6.106667rem;
    }
    .headlineImgTwo>a:nth-of-type(3) img {
        width: 3.04rem;
        margin: .026667rem .026667rem 0;
    }
    .headlineImgTwo>a:nth-of-type(4) img {
        width: 3.04rem;
        margin-bottom: 1px;
    }
    .headlineImgTwo div {
        display: flex;
        width: 10rem;
        background-color: #fff;
    }
    .headlineImgTwo div a {
        margin-right: .933333rem;
        margin-top: .133333rem;
    }
    .headlineImgTwo div a img {
        width: 1.066667rem;
    }
    
</style>