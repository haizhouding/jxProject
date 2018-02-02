<template>
    <div>
       <Bar-Sort-Top :msg='msg'></Bar-Sort-Top>
    </div>
</template>
    
<script>
import BarSortTop from './barSort/barSortTop/BarSortTop.vue'

export default {
    name: "RegistrationPage",
    data() {
      return {
        msg: '用户注册',
        form: {
          name: '手机号',
          region: '',
          date1: '',
          date2: '',
        //   delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
     components: {
         BarSortTop
    }
}
</script>
    
<style lang="css" scoped>
  .form{
     padding: 0.933333rem .8rem;
     display:flex;
    justify-content: space-around;
    flex-direction:column;
  }
</style>