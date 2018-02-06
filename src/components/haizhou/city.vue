<template>
    <div id="city" @click="toDetails">
            <ul>
                <li v-for="city in cityList" :key="city.id" @click.stop ="cityFn(city)">{{city[1]}}</li>
            </ul>
    </div>
</template>
<script>


export default {
    name: "regions",
    data () {
        return {
            regionsList: [0],
            cityList: []
        };
    },
    methods: {
        cityFn(city) {
            this.$router.push({ path: '/details/county' + city[0] });
            this.$store.dispatch('setTempCity', city[1]);
        }, 
        toDetails() {
           this.$router.go(-2)
        }

    },
    created() {
        this.axios.get('http://10.0.157.209:8888/getRegions').then(res => {
            // console.log(res.data)
           this.regionsList = res.data; 
           this.cityList = res.data[this.$route.params.index]
        })
        
    }
}
</script>
<style lang="css" scoped>
    #city{
        position: relative;
        background: rgba(10, 10, 10, 0.5);
        width: 100%;
        height: 17.786667rem;
        z-index: 1000;
    }
    #city ul {
        width: 80%;
        height: 100%;
        background: #fff;
        float: right;
        padding: .266667rem;
        color: #746f6f;

    }
    
    #city li {
        line-height: 1rem;
        /* float: right; */
        border-bottom: 1px solid #4b4949;
        background: #fff;
        font-size: .426667rem;
    }

    </style>