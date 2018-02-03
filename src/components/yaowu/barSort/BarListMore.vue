<template>

        <ul>
            <li>
                <figure>
                    <img src="https://img06.jiuxian.com/2017/0615/9a7cfa2281624c8c964c89653501fa1c2.jpg" alt="">
                    <figcaption>
                        <div>
                            <h5>  50金角西风酒</h5>
                            <p>
2wefrs
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>￥49.5</span>
                            
                            </p>
                            <p>
                                <span>98%好评</span>
                                <span>5567人评论{{message}}</span>
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
             
        };
    },
    props:['message'],
    mounted(){
       this.axios.get('http://10.0.157.231:8888/getMessage', {
            params: {
                pageNum:1
            }
        })
        .then(function (response) {
            console.log(response.data);

        })
    }
}
</script>
    
<style lang="css" scoped>
    li{
        height: 3.2rem;
    }
    h5{
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
    }
    figure>img{
        height: 3.2rem;
        width: 2.933333rem;
    }
    figcaption{
        width: 7.066667rem;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        border-bottom:1px solid #e8e8e8;
    }
</style>