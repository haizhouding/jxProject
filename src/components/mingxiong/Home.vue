<template>
    <div class="Home">
       <picture-show :pictureList="pictureList"></picture-show>
       <pic-list></pic-list>
       <slide-picture></slide-picture>
       <picture-list :id="0"></picture-list>
       <pic-two></pic-two>
       <slide-show-two></slide-show-two>
       <picture-list :id="1"></picture-list>
       <headline-list :id="0"></headline-list>
       <headline-img-one></headline-img-one>   
       <headline-list :id="1"></headline-list>   
       <headline-img-two :index="0"></headline-img-two>    
       <headline-list :id="2"></headline-list>   
       <headline-img-two :index="1"></headline-img-two>  
       <headline-list :id="3"></headline-list>   
       <headline-img-two :index="2"></headline-img-two>
       <headline-list :id="4"></headline-list>   
       <headline-img-two :index="3"></headline-img-two>     
       <headline-list :id="5"></headline-list>   
       <headline-img-three></headline-img-three>
       <h4>爆款推荐</h4>            
    </div>
</template>
<script>
import PictureShow from '../haizhou/PictureShow'
import picList from './picList'
import slidePicture from './slidePicture'
import pictureList from './pictureList'
import picTwo from './picTwo'
import slideShowTwo from './slideShowTwo'
import headlineList from './headlineList'
import headlineImgOne from './headlineImgOne'
import headlineImgTwo from './headlineImgTwo'
import headlineImgThree from './headlineImgThree'

export default {
    name: "Home",
    data () {
        return {
            pictureList: {
                width: '10rem',
                height: '4.8rem',
                srcList: [
                    "https://img09.jiuxian.com/bill/2018/0130/6882d20799fc471b929abacde1005371.jpg",
                    "https://img06.jiuxian.com/bill/2018/0131/aabca6ead521421c8c2377e1a16d9480.jpg",
                    "https://img07.jiuxian.com/bill/2018/0130/6b81b4a39146436ebf6ec66922e6d860.jpg",
                    "https://img08.jiuxian.com/bill/2018/0130/41136c732eae4a988b01f9fd3a1380cb.jpg",
                    "https://img09.jiuxian.com/bill/2018/0130/b0c61348b8364027977f7a3e753dcbc2.jpg",
                    "https://img08.jiuxian.com/bill/2018/0122/bbdec61bee1647f6be6af82193b466b6.jpg",
                    "https://img10.jiuxian.com/bill/2018/0130/4e469bb7fec042b89ea1a2b7fe536e21.jpg",
                    "https://img10.jiuxian.com/bill/2018/0130/b13631ce115c420c8274bf1be995f257.jpg",
                    "https://img06.jiuxian.com/bill/2018/0129/9574bec32b644cd3b15e1f130c3d571f.jpg"
                ]
            }
        }
    },
    components: {
        PictureShow,
        picList,
        slidePicture,
        pictureList,
        picTwo,
        slideShowTwo,
        headlineList,
        headlineImgOne,
        headlineImgTwo,
        headlineImgThree
    }
}
</script>
<style lang="css" scoped>
    .Home{
        width: 10rem;
        height: 366.373333rem;
        overflow: hidden;
    }
    .Home>h4 {
        text-align: center;
        font-weight: normal;
        color: #666666;
        line-height: .853333rem;
    }
</style>