<template>
     <!-- <div class="user">  -->
         <!-- 头部 -->
        <!-- <ul class="top">
            <li>
                <p>账号登录</p>
                <span></span>
            </li>
            <li>
                <p>手机动态登录</p>
                <span></span>
            </li>
        </ul> -->
        
    <!-- </div> -->



    <div class="mine">
        <div>
            <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
        </div>
        <div class="mine-uuu">
            <router-link to="/mine/One" class="left-one">账号登录</router-link>
            <router-link to="/mine/Two" class="right-wtwo">手机动态登录</router-link>
            <router-view></router-view>
            <!-- <router-view></router-view> -->
        </div>
        
    </div>
    
</template>



<script>
import BarSortTop from '../yaowu/barSort/barSortTop/BarSortTop.vue'
// import mine from './mine.vue'
    export default {
        name: "mine",
        data () {
            return {
                msg:'用户登录',
                suiji:"1234"
            };
        },
        components: {
            BarSortTop
        }
    }
</script>

<style scoped>
       /* .user .top{height:1.6rem;margin-top:1.066667rem;}
       .user .top li{float:left;} 
       .user .top li p{width: 1.966667rem;margin-left: 1.666667rem;text-align: center} 
       .user .top li p:hover{border-bottom:2px solid red;color: red;} */
       .mine{width:100%;}
       .mine .mine-uuu{height: 1.333333rem;width: 100%;margin-top: 1rem;}
       .mine .mine-uuu .left-one{font-size: .48rem; margin-left: 1.266667rem;}
       .mine .mine-uuu .right-wtwo{font-size: .48rem;margin-left: 1.966667rem;}
       .mine .mine-uuu .left-one:hover{text-decoration: red;text-decoration: underline;color: red;}
       .mine .mine-uuu .right-wtwo:hover{text-decoration: underline;color: red;}
</style>    

