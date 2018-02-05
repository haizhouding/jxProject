<template>
    <div id="province" @click="toDetails">
            <ul>
                <li v-for="pro in regionsList[1]" :key="pro.id" @click.stop ="proFn(pro)">{{pro[1]}}</li>
            </ul>
    </div>
</template>
<script>


import regions from './json/regions.json'
export default {
    name: "regions",
    data () {
        return {
            regionsList: []
        };
    },
    created() {
        this.regionsList = regions;
    },
    methods: {
        proFn(pro) {
            this.$router.push({ path: '/details/city' + pro[0] });
            this.$store.dispatch('setTempPro', pro[1]);


        },
        toDetails() {
           this.$router.push('/details/')
        }
    }
}
</script>
<style lang="css" scoped>
    #province{
        position: relative;
        background: rgba(24, 23, 23, 0.5);
        width: 100%;
        overflow: hidden;
        z-index: 1000;
        height: 21.333333rem;
    }
    #province ul{
        width: 80%;
        float: right;
        padding: .266667rem;
        background: #fff;
        
    }

    #province li {
        line-height: 1rem;
        border-bottom: 1px solid #4b4949;
        font-size: .426667rem;
        color: #746f6f;

    }

    </style>