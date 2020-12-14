import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export default new vuex.Store({
    state: {
        city:{
            name:"杭州",
            cityId:330100
        }
    },
    mutations:{
        changeCity(state,payload){
            state.city = payload;
        }
    }

});

