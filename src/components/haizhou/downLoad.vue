<template>
    <div id='downLoad' v-show="is_show">
       <span class="close" @click="closeFn"></span>
       <span class="logo"></span>
       <div>
           <p>下载app，首单满100送100！</p>
           <p>买真酒，就上酒仙网</p>
        </div>
        <button>立即下载</button>
    </div>
</template>
    
<script>
export default {
    name: "downApp",
    data () {
        return {
            is_show: true
        };
    },
    methods: {
        closeFn() {
            this.is_show = false;
        }
    }
}
</script>
    
<style lang="css" scoped>
    #downLoad {
        height: 1.146667rem;
        width: 100%;
        background: #2e2e2e;
        color: white;
        padding-left: .4rem;
        display: flex;
        align-items: center;
    }
    #downLoad .close{
        display: inline-block;
        width: .346667rem;
        height: .346667rem;
        background:url(https://m.jiuxian.com/mjava_statics/images/downapp/topApp.png) left top no-repeat;
        background-size: .906667rem 1.333333rem;
        margin-right: .426667rem;
    }
    #downLoad .logo{
        display: inline-block;
        height: .8rem;
        width: .8rem;
        background:url(https://m.jiuxian.com/mjava_statics/images/downapp/topApp.png) left -.426667rem no-repeat;
        background-size: .906667rem 1.333333rem; 
        margin-right: .933333rem;
    }
    #downLoad div{
        text-align: center;
    }
    #downLoad div p:last-child {
        color: #fc5a5a;
    }
    #downLoad button{
        float: right;
        background: #fc5a5a;
        width: 1.76rem;
        height: 1.146667rem;
        border: none;
        color: white;
        margin-left: 1.06rem;
    }
</style>