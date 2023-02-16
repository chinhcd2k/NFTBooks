import Vue from 'vue'
import VueGtag from "vue-gtag";
import {BootstrapVue} from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import router from './router/router.js'
import VueAspectRatio from "vue-aspect-ratio";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Crystal_128_error.svg/1200px-Crystal_128_error.svg.png",
    loading: "https://www.bloghong.com/wp-content/uploads/2016/05/loading-blogger.jpg",
    attempt: 1,
    lazyComponent: true,
    listenEvents: ["scroll"],
});
Vue.use(VueGtag, {
    config: {
        id: "G-KY2M5ZEW06",
        params: {
            send_page_view: false
        }
    }
}, router);
Vue.component("vue-aspect-ratio", VueAspectRatio)
new Vue({
    render: h => h(App), router
}).$mount('#app')
