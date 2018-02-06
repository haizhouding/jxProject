<template>
    <div id="county" @click="toDetails">
          
            <ul>
                <li v-for="county in countyList" :key="county.id" @click.stop="countyFn(county)">{{county[1]}}</li>
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
            cityList: [],
            countyList: []
        };
    },
    methods: {
        countyFn(county) {
            this.$router.go(-3)
            this.$store.dispatch('setDistrict', county[1])
        },
        toDetails() {
           this.$router.go(-3)
        }
        
    },
    created() {
        this.regionsList = regions;        
        this.countyList = this.regionsList[this.$route.params.index];
    }
}
</script>
<style lang="css" scoped>
    #county{
        position: relative;
        background: rgba(10, 10, 10, 0.5);
        width: 100%;
        height: 17.786667rem;
        z-index: 1000;
    }
    #county ul {
        width: 80%;
        height: 100%;
        background: #fff;
        float: right;
        padding: .266667rem;
        color: #746f6f;

    }
    
    #county li {
        line-height: 1rem;
        /* float: right; */
        border-bottom: 1px solid #4b4949;
        background: #fff;
        font-size: .426667rem;
    }

    </style>