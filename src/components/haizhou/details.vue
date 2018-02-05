<template>
    <div id="detail">
        <header-bar :msg='msg' class="header"></header-bar>
        <router-view></router-view>
        <bottom-bar></bottom-bar>
    </div>  
</template>
    
<script>

import HeaderBar from '../yaowu/barSort/barSortTop/BarSortTop.vue'
import bottomBar from './bottomBar'
import contents from './contents'
import productLists from './json/product.json'

export default {
    name: "details",
    data () {
        return {
             msg: '商品详情',
        }
    },
    components:{
        HeaderBar, 
        bottomBar,
        contents
    }
}
</script>
    
<style lang="css" scoped>
    .header{
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 10rem;
    }
</style>