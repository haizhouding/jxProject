<template>
    <div id="province">
            <ul>
                <li v-for="pro in regionsList[1]" :key="pro.id" @click ="proFn(pro[0])">{{pro[1]}}</li>
            </ul>
            <div class="curtian"></div>
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
        proFn(num) {
            this.$router.push({ path: '/details/city' + num });
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
    }

    #province li {
        line-height: 1rem;
        width: 80%;
        float: right;
        border-bottom: 1px solid #4b4949;
        background: #fff;
        font-size: .426667rem;
        color: #746f6f;

    }

    </style>