<template>
    <div class="pictureList">
       <a href="#" v-for="img in imgList[id]">
           <img :src="img">
       </a>
    </div>
</template>
<script>
export default {
    name: "pictureList",
    data () {
        return {
            imgList: [
                [
                    "https://img06.jiuxian.com/bill/2018/0130/c66d86c1220f4cc1a5b72b6d61de0a99.jpg",
                    "https://img06.jiuxian.com/bill/2018/0130/e183c12fb43f493c8a1863e2fca35203.jpg",
                    "https://img10.jiuxian.com/bill/2018/0130/c9bb19bbe4ba42e08c8793a2d563369c.jpg",
                    "https://img09.jiuxian.com/bill/2018/0130/25104712fbc945eb9295cfd23fbb9f35.jpg",
                    "https://img09.jiuxian.com/bill/2018/0130/6b81630cf9ee4e2da29c71c8e39c9d1e.jpg",
                    "https://img07.jiuxian.com/bill/2018/0130/265b94cfda1146ee8bef04f8318926ac.jpg",
                    "https://img07.jiuxian.com/bill/2018/0130/134a513b29904d56918e33ae962274d0.jpg",
                    "https://img10.jiuxian.com/bill/2018/0130/f5919262a2514b5f83d329f741912f72.jpg"
                ],
                [
                    "https://img09.jiuxian.com/bill/2018/0127/7f207b98268041cc8c373f3e37e15298.jpg",
                    "https://img10.jiuxian.com/bill/2018/0130/0a5e172ac22945b6a001a25e35963604.jpg",
                    "https://img10.jiuxian.com/bill/2018/0128/c7fac383a88d44379b5458b9313d128a.jpg",
                    "https://img06.jiuxian.com/bill/2018/0131/67adcd70a1b14e97bc210d7b0416d392.jpg",
                    "https://img07.jiuxian.com/bill/2018/0201/31c05b29955944fb99d8a868182be57d.jpg",
                    "https://img07.jiuxian.com/bill/2018/0130/cd4ef9ca3fde4613934ad2152c39bba4.jpg"
                ]
            ]
        }
    },
    props: ['id']
}
</script>
<style lang="css" scoped>
    .pictureList{
        background-color: #f6f6f6;
    }
    .pictureList img {
        width: 10rem;
    }
</style>