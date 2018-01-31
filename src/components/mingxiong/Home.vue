<template>
    <div class="Home">
       <slide-show></slide-show>
       <pic-list></pic-list>
       <slide-picture></slide-picture>
    </div>
</template>
<script>
import slideShow from './slideShow'
import picList from './picList'
import slidePicture from './slidePicture'

export default {
    name: "Home",
    data () {
        return {
            
        }
    },
    components: {
        slideShow,
        picList,
        slidePicture
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