import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'

//WHEN using @ you needn't declare the component name in Details

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        Home
    ]
});


export default router;
