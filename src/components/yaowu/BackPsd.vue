<template>
    <div>
       <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
       <form action="" class='form1'>
            <div class='Bdiv'>
                <span></span>
                <input type="text" placeholder="账号绑定的手机号">
            </div>
            <div class='Sdiv'>
                <input type="text" placeholder="验证码"><b></b><b>换一张</b>
            </div>
            <div class='Sdiv'>
                <input type="text" placeholder="请输入校验码">
                <button>获取校验码</button>	
            </div>
            <button class='button'>修改密码</button>  
	    </form>
    </div>
</template>
    
<script>
import BarSortTop from './barSort/barSortTop/BarSortTop.vue'

export default {
    name: "RegistrationPage",
    data() {
      return {
        msg: '找回密码',
      }
    },
     components: {
         BarSortTop
    }
}
</script>
    
<style lang="css" scoped>
*{
    font-size:.32rem;
}
    span{
        display:inline-block;
        width:.8rem;
    }
    .form1 div{
        height:.886667rem
    }
  .form1{
      height:7.006667rem;
     padding: 0 .6rem;
     display:flex;
    justify-content: space-around;
    flex-direction:column;
  }
  .form1 input{
      height:.833333rem;
  }
  .form1>div button{
      height:.833333rem;
      border:.000267rem solid #df3832;
      color:white;
    background:#df3832;
    border-radius:.08rem;
    padding:0 .4rem;
  }
  .Sdiv{
      display:flex;
    justify-content: space-between;
  }
  .Sdiv input{
      text-indent:.426667rem;
      border-radius:.07rem;
       border:.026667rem solid #cccccc;
  }
  .Bdiv{
      display:flex;
      border:.026667rem solid #cccccc;
      border-radius:.07rem;
  }
  .Bdiv input{
    border:0;
}
  .Bdiv input{
      text-indent:.293333rem;
  }  
  .button{
      width:8rem;
      height:.906667rem;
      margin:0 auto;
       border:.000267rem solid #df3832;
      color:white;
    background:#df3832;
    border-radius:.08rem;
  }
     .form1 div:nth-of-type(1)>span{
      background:url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat -3.36667rem -0.736667rem;
    background-size:8.533333rem 6.666667rem;
  }
  .form1 div:nth-of-type(4)>span,.form1 div:nth-of-type(5)>span{
      background:url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat -1.67rem -0.736667rem;
    background-size:8.533333rem 6.666667rem;
  }
</style>