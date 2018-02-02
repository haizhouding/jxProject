<template>
    <div class="Home">
       <slide-show></slide-show>
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
                   
    </div>
</template>
<script>
import slideShow from './slideShow'
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
            
        }
    },
    components: {
        slideShow,
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
</style>