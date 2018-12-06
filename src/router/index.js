import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import Login from './login'
import MagicQuote from './magicQuote'
import CrazyReact from  './crazyReact'

//WHEN using @ you needn't declare the component name in Details

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        Home,
        Login,
        MagicQuote,
        CrazyReact
    ]
});


router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') ==     null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
});


export default router;
