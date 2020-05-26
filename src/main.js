import Vue from 'vue';
import VueRouter from 'vue-router';

import 'at-ui-style';
import AtUI from 'at-ui';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(AtUI);

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