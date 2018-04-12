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
        tempCity: '',
        cartList: [],
        productId: '',
        productNum: '',
        userList: []
        

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
        SETPRODUCTID(state, id) {
            state.productId = id
        },
        SETPRODUCTNUM(state, num) {
            state.productNum = num   
        },
        ADDPRODUCT(state) {
            for (var product of state.cartList) {
                if (product.id == state.productId) {
                    product.num += state.productNum
                    return
                }
            }
            state.cartList.push({
                id: state.productId,
                num: state.productNum
            })
        },
        ADDPRODUCTNUM(state, id) {
            for (var product of state.cartList) {
                if (product.id == id) {
                    product.num += 1
                    return
                }
            }
        },
        REDUCEPRODUCTNUM(state, id) {
            for (var product of state.cartList) {
                if (product.id == id) {
                    if (product.num > 1) {
                       product.num -= 1 
                    }
                    return
                }
            }
        },
        DELPRODUCT(state, id) {
            var num = -1
            for (var product of state.cartList) {
                num++
                if(product.id == id) {
                    state.cartList.splice(num, 1)
                }
            }
        }


        //  用户登录的一些操作
        
        
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
        setProductId(state, id) {
            state.commit('SETPRODUCTID', id)
        },
        setProductNum(state, num) {
            state.commit('SETPRODUCTNUM', num)
        },
        addProduct(state) {
            state.commit('ADDPRODUCT')
        },
        addProductNum(state, id) {
            state.commit('ADDPRODUCTNUM', id)
        },
        reduceProductNum(state, id) {
            state.commit('REDUCEPRODUCTNUM', id)
        },
        delProduct(state, id) {
            state.commit('DELPRODUCT', id)
        },

    },
    getters: {
        getDistrict(state) {
            return state.district
        },
        getCartList(state) {
            return state.cartList
        },
        getProductNum(state) {
            return state.productNum
        }
    }
})