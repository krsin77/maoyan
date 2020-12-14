import Vue from 'vue';
import App from './App.vue';

//引入路由
import router from "./router";

//引入store
import store from './store'

// 引入reset.css
import "./assets/style/reset.scss";

// 引入iconfont
import "./assets/fonts/iconfont.css";

//引入amfe-flexible 设置根字体大小
import "amfe-flexible";

//不要生产环境提示
Vue.config.productionTip = false

new Vue({
    store:store,
    router: router,
    render: h => h(App)
}).$mount('#app');