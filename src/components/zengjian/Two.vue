

<template>
    <div class="user-one">
        <div class="phone">
            <input type="text" placeholder="请输入手机号码">
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
    </div>
</div>
</template>


<script>
export default {
  name: "Two",
        data () {
            return {
                // msg:'用户登录',
                suiji:"1234"
            };
        },
        // components: {
        //     BarSortTop
        // },
        methods: {
            abb(){
                this.suiji = Math.floor(Math.random()*10000); 
                
            }
        }
    }
</script>

<style>
        .user-one{margin-top: .533333rem;}
        .user-one .phone{height:1.12rem; width:8rem; background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)no-repeat -3.8rem -.7rem;background-size:9rem;border: 1px solid #000;border-radius: 0.1rem;margin-left: 1.2rem;}
        .user-one .phone input{height: 1.02rem;width: 6rem;margin-left: .9rem;border: none;}
       .user-one .yzm{height: 1.02rem;margin-top: .8rem;} 
       .user-one .yzm input{height: 1.02rem;margin-left:1.266667rem;border-radius: .1rem;}
       .user-one .yzmimg{height: 1.02rem; width:3rem;float: right;}
        .user-one .yzmimg span{height: .8rem;display: block; width: 1.133333rem;float:left;margin-top: .266667rem}
        .user-one .yzmimg a{line-height: 1.02rem;}
       .user-one .btn{width:8rem;height: .8rem;background:#de4943;margin-left: 1.066667rem;margin-top: .533333rem;}
       .user-one .btn a{font-size: .373333rem;text-align: center;line-height: .8rem;margin-left: 3rem;}
       .user-one .zhao{width:8rem;margin-left:1.266667rem;}
       .user-one .zhao a:first-of-type{float: left;}
       .user-one .zhao a:last-of-type{float: right}
       .user-one .foot p:first-of-type{width: 3.533333rem;border:1px solid red; margin-top: 1.333333rem ;}
       .user-one .foot p:last-of-type{width: 3.533333rem;border:1px solid red;display: block;float:right;}
       .user-one .foot{height: 5rem;}
       .user-one .foot h6{text-align: center;width:1.333333rem;}
       .user-one .foot a{margin-left:3.9rem;font-size: .35rem;}
       .user-one .foot li{height:1.2rem;width: 1.253333rem;margin-left: 1.333333rem;margin-top: 1.333333rem;float: left;} 
       .user-one .foot li:first-of-type{ background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) -7.43333rem -1.8rem;background-size:6rem;}
       .user-one .foot li:last-of-type{ background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) -8.84333rem -1.8rem;background-size:6rem;}
</style>

