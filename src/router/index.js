import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '/index',
    component: () => import('@/views/HomePage/index'),
    name: '首页'
}, {
    path: '/',
    redirect: '/index'
}]

export default new Router({
    routes,
    mode: 'hash'
})
