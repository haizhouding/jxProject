
<template> 
    <div class="zhuce">
         <!-- <div class="header">
            <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
        </div> -->
        <div class="phone">
            <input type="number" placeholder='手机号' name="old" v-model="phone" @input="regPhone" />
            <i>{{ phone_msg | regPhone_msg }}</i>
        </div>
         <div class="yzm">
            <input type="number" placeholder="验证码" v-model="yzm" @input="regYzmFn" />
            <i>{{ yzm_msg }}</i>
            <div class="yzmimg">
                <span>{{ suiji }}</span>
                <a href="#" @click="abb('suiji' ,4)">换一批</a>
            </div>
        </div>
        <div class='one-yam'>
            <input input="text" placeholder='请输入校验码' v-model="xzm" @input="regXzmFn" />
            <i>{{ xzm_msg }}</i>
            <div class="huo">
            <input type='button' placeholder='' value="获取校验码" @click="getXzm" />
            </div>
        </div>
        <div class="main-for">
            <input type="password" placeholder='请输入密码' v-model="pwd1" @input="sliceNum('pwd1',20)"/>
            <i>{{ pwd1_msg }}</i>
        </div>
        <div class="main-fiv">
            <input type='password' placeholder="再次请输入密码" v-model="pwd2" @input="regFN"/>
            <i>{{ pwd2_msg }}</i>
        </div>
        <div class='six'>
            <input type="button" class='btn' placeholder="" value="确认注册" @click="sbm"/>
        </div>
    </div>
</template>

<script>
// import BarSortTop from '../yaowu/barSort/barSortTop/BarSortTop.vue'
    export default{
        name:'ceng',
        data() {
            return{
                suiji:'1234',
                phone: '',
                phone_msg: '',
                pwd2_msg:'',
                pwd1_msg:'',
                yzm: '',
                yzm_msg: '',
                xzm: '',
                xzm_msg: '',
                XZM: '',
                pwd1: '',
                pwd2: '',
                isFlag: false
            }
        },
        filters: {
            regPhone_msg(value) {
                return value ? '√' : '请输入正确的手机号码'
            },
            plNum(value) {
                var reg1 = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
                return reg1.test(value) ? '√' :'密码不正确'
            }   
        },
        methods:{
            regPhone() {
                var reg = /^[1][3,4,5,7,8][0-9]{9}$/
                 this.phone_msg = reg.test(this.phone) ? true : false
            },
            regYzmFn() {
                if (this.yzm == this.suiji) {
                    this.yzm_msg = '√'
                } else {
                    this.yzm_msg = '×'
                }
            },
            regXzmFn() {
                if (this.xzm == this.XZM) {
                    this.xzm_msg = '√'
                } else {
                    this.xzm_msg = '×'
                }
            },
            abb(msg, num){
                this[msg] = ''
                for (var i = 0; i < num; i++) {
                    if (i == 0) {
                        this[msg] += Math.floor(Math.random()*9 + 1)
                    } else {
                        this[msg] += Math.floor(Math.random()*10)
                    }
                }                
            },
            sliceNum(msg ,num) {
                if (this[msg].length > num) {
                    this[msg] = this[msg].slice(0, num)
                }
            },
            getXzm() {
                this.abb('XZM', 6)
                console.log(this.XZM)
            },
            sbm() {
                if (this.isTure) {
                    console.log({
                        Phone: this.phone,
                        Pwd: this.pwd1
                    })
                } else {
                    alert('你的信息至少有一项不符合要求')
                }
            },
            //  验证密码是否相同的方法
            regFN() {
                if (this.pwd1 == this.pwd2) {
                    this.pwd2_msg = '√'
                } else {
                    this.pwd2_msg = '×'
                }
            }
        },
        computed: {
            isTure() {
                return this.pwd1 == this.pwd2 && this.xzm == this.XZM && this.yzm == this.suiji && this.phone_msg && this.pwd1 != ''
                && this.pwd2 != '' && this.xzm != '' &&  this.yzm != '' ? true : false
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
    .zhuce .one-yam .huo input{background:#df3832;width:2.666667rem;color:#fcf3d0}
    .zhuce .one-yam input{float:left}
    .zhuce .main-for{margin-top:1.066667rem;}
    .zhuce .main-for input{width:9.226667rem;height:1.066667rem;margin-left:.8rem}
    .zhuce .main-fiv{margin-top:.906667rem}
    .zhuce .main-fiv input{width:9.226667rem;height:1.066667rem;margin-left:.8rem}
    .zhuce .six{width:8rem;margin-top:1.066667rem;width:9.2rem;}
    .zhuce .six input{width:8rem;text-align:center;background:#df3832;height:.906667rem;font-size:.426667rem;color:#fcf3d0;margin-left:1.52rem}
    
    /* .zhuce .yzmimg{float:right;}
    .zhuce .one-yam{width: 8rem;height: 1.066667rem;}
    .zhuce input[type=button]{height:.333333rem;width:3.52rem} */
</style>