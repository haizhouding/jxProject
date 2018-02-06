<template>
        <ul>
            <li v-for="(data, index) in datas" :key="data.id" :id = 'index' @click="toMore(data.commonProductInfo)">
                <figure>
                    <img :src=data.commonProductInfo.imgPath alt="">
                    <figcaption>
                        <div>
                            <h6>{{ data.commonProductInfo.pname }}</h6>
                            <p>
                               <span v-for="data1 in data.promo" :key="data1.id" :style="{'color':data1.wordColor,'background-color':data1.backColor}">{{data1.name}}</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <b  class="ba_red">￥{{data.commonProductInfo.jxPrice}}</b>
                            </p>
                            <p>
                                <span>98% 好评</span>
                                <span>5567 人评论</span>
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </ul>
</template>
    
<script>

export default {
    name: "BarListMore",
    data () {
        return {
           pageNum:0,
           datas:[]
        };
    },
    props:['message'],
    created(){
       this.axios.get('http://10.0.157.209:8888/getMessage', {
            params: {
                pageNum:0,  
            }
        })
        .then(response => {
            // console.log(response.data.promoList);
            
            for(var p of response.data.promoList){
                if(this.datas.indexOf(p) == -1 ){
                    this.datas.push(p);
                }
                
            }
        
        })
        
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        toMore(data){
            console.log(data.pid);
            this.$router.push("/details/contents/"+ data.pid);
          
        },
        handleScroll() {
            (() =>{
                if(this.pageNum == 7){
                    return;
                }
                this.pageNum += 1;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop,"----"+document.body.scrollHeight)
                if(document.body.scrollHeight - scrollTop - document.body.offsetHeight <-20){
               
                    
                this.axios.get('http://10.0.157.209:8888/getMessage', {
                    params: {
                        pageNum:this.pageNum
                    }
                })
                .then(response => {
                    // this.datas = this.datas.concat(response.data.promoList)
                    for(var p of response.data.promoList){
                        if(this.datas.indexOf(p) == -1 ){
                            this.datas.push(p);
                        }
                
                    }
                    // console.log(this.$data);
                   
                });
              }   
            })();   
        }
    }
}
</script>
    
<style lang="css" scoped>
    li{
        height: 3.2rem;
    }
    h6{
         margin: 0;
        padding: 0;
        line-height: .533333rem;
    }
    p{
        line-height: .533333rem;
    }
    figure{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
         display: flex;
        font-size: .32rem;
        height:3.2rem;
    }
    figure>img{
        height:3.2rem;
        width:2.3rem;
        margin: 0 .266667rem 0 .4rem;
    }
    figcaption{
        width: 7.066667rem;
        display: flex;
        height:3.2rem;
        flex-direction:column;
        justify-content: space-around;
        border-bottom:1px solid #e8e8e8;
    }
    .ba_red{
        color: red;
    }
    span{
        border-radius: .053333rem;
        padding: 0 .08rem; 
        margin-right: .133333rem;
    }
</style>