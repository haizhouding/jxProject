import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        district: {
            pro: '江苏',
            city: '泰州',
            county: '兴化'
        },
        tempPro: '',
        tempCity: ''
    },
    mutations: {
        SETTEMPPRO(state, pro) {
            state.tempPro = pro
        },
        SETTEMPCITY(state, city) {
            state.tempCity = city
        },
        SETDISTRICT(state, county) {
            state.district.pro = state.tempPro
            state.district.city = state.tempCity
            state.district.county = county
        },
    },
    actions: {
        setTempPro(state, pro) {
            state.commit('SETTEMPPRO', pro)
        },
        setTempCity(state, city) {
            state.commit('SETTEMPCITY', city)
        },
        setDistrict(state, county) {
            state.commit('SETDISTRICT', county)
        },
    },
    getters: {
        getDistrict(state) {
            return state.district
        }
    }
})