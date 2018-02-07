
<template> 
    <div class="zhuce">
         <div class="header">
            <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
        </div>
        <div class="phone">
            <input type="text" placeholder='手机号'></input>
            <i></i>
        </div>
         <div class="yzm">
            <input type="text" placeholder="验证码">
            <div class="yzmimg">
                <span>{{ suiji }}</span>
                <a href="#" @click="abb">换一批</a>
            </div>
        </div>
        <div class='验证码'>
            <input input="text" placeholder='请输入校验码'></input>
            <i></i>
            <input type='button' placeholder='获取校验码'></input>
        </div>
        <div class="main-for">
            <input input="text" placeholder='请输入密码'></input>
            <i></i>
        </div>
        <div class="main-fiv">
            <input type='text' placeholder="请输入密码"></input>
            <i></i>
        </div>
        <div class='six'>
            <input type="button" class='btn'>确认注册</input>
        </div>
    </div>
</template>

<script>
import BarSortTop from '../yaowu/barSort/barSortTop/BarSortTop.vue'
    export default{
        name:'ceng',
        data() {
            return{
                msg:'ass',
                suiji:'1234'
            };
        },
        methods:{
            abb(){
                 this.suiji = Math.floor(Math.random()*10000);
            }
        }
    }
    
</script>
<style>

</style>