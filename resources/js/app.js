require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }

});

//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
