import Vue from 'vue';
import VueRouter from 'vue-router';


// import AtUI from 'at-ui';
// // import 'at-ui-style';
// import 'at-ui-style/src/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

Vue.use(VueRouter);
// Vue.use(AtUI);
Vue.use(ElementUI);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});