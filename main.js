
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';
import VueLazyload from 'vue-lazyload'
import routerMap from './routers';
//import Vuelazyload from 'vue-lazyload';

require('./public/stylesheets/base.css')

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTouch);
//Vue.use(VueLazyload)
Vue.use(VueLazyload,{
	error:'dist/404.png',
	loading:'dist/loading-spin.svg',
	try:3
})

//实例化VueRouter
let router = new VueRouter({
    hashbang: false,
    history: false
});

Vue.component('nv-head', require('./components/head.vue')); // 注册全局头部
Vue.component('nv-footer', require('./components/footer.vue')); // 注册全局尾部

let app = Vue.extend({});

routerMap(router);

router.start(app, "body");


