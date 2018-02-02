<template>
    <div>
       <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
    </div>
</template>
    
<script>
import BarSortTop from './barSort/barSortTop/BarSortTop.vue'

export default {
    name: "RegistrationPage",
    data () {
        return {
             msg:'用户注册', 
        };
    },
     components: {
         BarSortTop
    }
}
</script>
    
<style lang="css" scoped>
    
</style>