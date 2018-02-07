
<template> 
    <div class="zhuce">
         <!-- <div class="header">
            <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
        </div> -->
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
        <div class='one-yam'>
            <input input="text" placeholder='请输入校验码'></input>
            <i></i>
            <div class="huo">
            <input type='button' placeholder='' value="获取校验码"></input>
            </div>
        </div>
        <div class="main-for">
            <input input="text" placeholder='请输入密码'></input>
            <i></i>
        </div>
        <div class="main-fiv">
            <input type='text' placeholder="再次请输入密码"></input>
            <i></i>
        </div>
        <div class='six'>
            <input type="button" class='btn' placeholder="" value="确认注册"></input>
        </div>
    </div>
</template>

<script>
// import BarSortTop from '../yaowu/barSort/barSortTop/BarSortTop.vue'
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
    .zhuce{width:10.986667rem}
    .zhuce .phone{width:9.253333rem ;height:1.066667rem;margin-left:.853333rem}
    .zhuce .phone input{width:9.253333rem;height:1.066667rem;}
    .zhuce .yzm{width: 8rem;height: 1.066667rem;margin-top:1.066667rem;margin-left:.853333rem;clear:both}
    .zhuce .yzm input{width:3.52rem ;height:1.066667rem;}
    .zhuce .yzm span{width:3.946667rem; height:1.066667rem;background:pink;font-size:.533333rem;main-right:.8rem}
    .zhuce .yzmimg{font-size:.333333rem;float:right}
    .zhuce .yzmimg a{margin-left:1.066667rem}
    .zhuce .one-yam{margin-top:1.066667rem;width:9.226667rem;height:1.066667rem;margin-left:.8rem}
    .zhuce .one-yam  input{width:4.186667rem;height:1.066667rem}
    .zhuce .one-yam .huo{float:right;width:2.666667rem;background:red;}
    .zhuce .one-yam .huo button{background:red;width:2.666667rem}
    .zhuce .one-yam input{float:left}
    .zhuce .main-for{margin-top:1.066667rem;}
    .zhuce .main-for input{width:9.226667rem;height:1.066667rem;margin-left:.8rem}
    .zhuce .main-fiv{margin-top:.906667rem}
    .zhuce .main-fiv input{width:9.226667rem;height:1.066667rem;margin-left:.8rem}
    .zhuce .six{width:8rem;margin-top:1.066667rem;width:9.2rem;}
    .zhuce .six input{width:8rem;text-align:center;background:red;height:.906667rem;font-size:.426667rem;color:#fcf3d0;margin-left:1.52rem}
    
    /* .zhuce .yzmimg{float:right;}
    .zhuce .one-yam{width: 8rem;height: 1.066667rem;}
    .zhuce input[type=button]{height:.333333rem;width:3.52rem} */
</style>