<template>
     <div class="user">
         <!-- 头部 -->
        <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
        <ul class="top">
            <li>
                <p>账号登录</p>
                <span></span>
            </li>
            <li>
                <p>手机动态登录</p>
                <span></span>
            </li>
        </ul>
        <form action="#">
            <div class="oneuser">
                <i></i>
                <input type="text" placeholder="用户名/手机/邮箱">
            </div>
            <div class="usertwo">
                <input type="text" placeholder="密码">
            </div>
            <div class="yzm">
                <input type="text" placeholder="验证码">
                <div class="yzmimg">
                    <span>{{ suiji }}</span>
                    <a href="#" @click="abb">换一批</a>
                </div>
                  
            </div>
          <div class="btn">
             <a href="#">立即登录</a>
          </div>
          <div class="zhao">
              <a href="#">免费注册</a>
              <a href="#">找回密码</a>
          </div>
          <div class="foot">
              <p></p><a href="#">合作伙伴登录</a>  <p></p>
              <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
              </ul>
          </div>
        </form>
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
        },
        methods: {
            abb(){
                this.suiji = Math.floor(Math.random()*10000); 
                
            }
        }
    }
</script>

<style scoped>
       .user .top{height:1.6rem;margin-top:1.066667rem;}
       .user .top li{float:left;} 
       .user .top li p{width: 1.966667rem;margin-left: 1.666667rem;text-align: center} 
       .user .top li p:hover{border-bottom:2px solid red;color: red;}
       .user .oneuser{width: 8rem;height: 1.066667rem;margin-left:1.266667rem;background-size:4.533333rem;  border:1px solid #000;
       background: url(https://misc.jiuxian.com/m_user/images/headIcon.png)no-repeat -2.68rem .1rem; background-size: 5rem;}
       .user .oneuser i{height: .613333rem;}
       .user .oneuser input{height: 0.8rem;width: 6.333333rem;border: none;  margin-left: .733333rem;font-size: .426667rem;}
       .user .usertwo{height:1.066667rem;margin-top:1.366667rem; width: 8rem;height: 1.066667rem;margin-left:1.266667rem;background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)no-repeat -1rem -.2rem; background-size:5rem;  border:1px solid #000;}
       .user .usertwo input{height: 0.8rem;width: 6.333333rem; margin-left: .733333rem;border: none; font-size: .426667rem;}
       .user .yzm{height: 1.02rem;margin-top: .8rem;} 
       .user .yzm input{height: 1.02rem;margin-left:1.266667rem;}
       .user .yzmimg{height: 1.02rem; width:3rem;float: right;}
        .user .yzmimg span{height: .8rem;display: block; width: 1.133333rem;float:left;margin-top: .266667rem}
        .user .yzmimg a{line-height: 1.02rem;}
       .user .btn{width:8rem;height: .8rem;background:#de4943;margin-left: 1.066667rem;margin-top: .533333rem;}
       .user .btn a{font-size: .373333rem;text-align: center;line-height: .8rem;margin-left: 3rem;}
       .user .zhao{width:8rem;margin-left:1.266667rem;}
       .user .zhao a:first-of-type{float: left;}
       .user .zhao a:last-of-type{float: right}
       .user .foot p:first-of-type{width: 3.533333rem;border:1px solid red; margin-top: 1.333333rem ;}
       .user .foot p:last-of-type{width: 3.533333rem;border:1px solid red;display: block;float:right;}
       .user .foot{height: 5rem}
       .user .foot h6{text-align: center;width:1.333333rem;}
       .user .foot a{margin-left:3.9rem;font-size: .35rem;}
       .user .foot li{height:1.2rem;width: 1.253333rem;margin-left: 1.333333rem;margin-top: 1.333333rem;float: left;} 
       .user .foot li:first-of-type{ background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) -7.43333rem -1.8rem;background-size:6rem;}
       .user .foot li:last-of-type{ background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) -8.84333rem -1.8rem;background-size:6rem;}
</style>    

