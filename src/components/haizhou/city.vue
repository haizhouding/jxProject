<template>
    <div id="city" @click="toDetails">
            <ul>
                <li v-for="city in cityList" :key="city.id" @click.stop ="cityFn(city[0])">{{city[1]}}</li>
            </ul>
    </div>
</template>
<script>


import regions from './json/regions.json'
export default {
    name: "regions",
    data () {
        return {
            regionsList: [],
            cityList: []
        };
    },
    methods: {
        cityFn(num) {
            this.$router.push({ path: '/details/county' + num });
        }, 
        toDetails() {
           this.$router.push('/details/')
        }

    },
    created() {
        this.regionsList = regions;
        this.cityList = this.regionsList[this.$route.params.index];
        
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