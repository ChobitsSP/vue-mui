import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: require('src/Index'),
        meta: {
            title: 'index'
        }
    },
    {
        path: '/slider',
        name: 'slider',
        component: require('src/views/slider'),
        meta: {
            title: '开关（slider）'
        }
    },
    {
        path: '/switches',
        name: 'switches',
        component: require('src/views/switches'),
        meta: {
            title: '开关（switch）'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((route, redirect, next) => {
    window.document.title = route.meta.title || window.document.title;
    next();
});

export default router