<template>
    <div class="Home">
       <slide-show></slide-show>
    </div>
</template>
<script>
import slideShow from './slideShow'

export default {
    name: "Home",
    data () {
        return {
            msg: ''
        }
    },
    components: {
        slideShow
    }
}
</script>
<style lang="css" scoped>
    .Home{
        width: 31.25rem;
        
    }
</style>