<template>
    <div class="Home">
       <slide-show></slide-show>
       <pic-list></pic-list>
    </div>
</template>
<script>
import slideShow from './slideShow'
import picList from './picList'

export default {
    name: "Home",
    data () {
        return {
            msg: ''
        }
    },
    components: {
        slideShow,
        picList
    }
}
</script>
<style lang="css" scoped>
    .Home{
        width: 31.25rem;
    }
</style>