<template>
    <div class="user">
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
              <a href="#"  @click='jup'>免费注册</a>
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
</div>
</template>


<script>
// import One from './Formone.vue'
export default {

  name: "One",
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
            },
            add() {
                
            },
            jup() {
                this.$router.push({ path: "/register" })
            }
        }
    }
</script>

<style>
    .user .oneuser{width: 8rem;height: 1.066667rem;margin-left:1.266667rem;background-size:4.533333rem;  border:1px solid #000;
       background: url(https://misc.jiuxian.com/m_user/images/headIcon.png)no-repeat -2.68rem .1rem; background-size: 5rem;border-radius: 0.1rem;}
       .user .oneuser i{height: .613333rem;}
       .user .oneuser{margin-top: 1.066667rem;}
       .user .oneuser input{height: 0.8rem;width: 6.333333rem;border: none;  margin-left: .733333rem;font-size: .426667rem;}
       .user .usertwo{height:1.066667rem;margin-top:1.366667rem; width: 8rem;height: 1.066667rem;margin-left:1.266667rem;border-radius: .1rem;background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)no-repeat -1rem -.2rem; background-size:5rem;  border:1px solid #000;}
       .user .usertwo input{height: 0.8rem;width: 6.333333rem; margin-left: .733333rem;border: none; font-size: .326667rem;}
       .user .yzm{height: 1.02rem;margin-top:.666667rem;} 
       .user .yzm span{ display: block; width:6.333333rem;height:1.333333rem;font-size:.533333rem;}
       .user .yzm input{height: 1.02rem;margin-left:1.266667rem;border-radius: .1rem}
       .user .yzmimg{height: 1.02rem; width:3rem;float: right;margin-right:.8rem}
        .user .yzmimg span{display: block;height: .8rem; width: 1.33333rem;float:left;background:pink;}
        .user .yzmimg a{line-height: 1.02rem;margin-left:.466667rem}
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

