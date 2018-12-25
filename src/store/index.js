import Vue from 'vue'
import Vuex from 'vuex'
import {trollAction} from "./actions";
import {trollMutaion} from "./mutations"

Vue.use(Vuex); // config vuex plugin for vue

//in order to access state in our component, we must attach this store to our Vue instance in file main.js

export default new Vuex.Store({
    stric : true,
    state: {
        showLoader: false,
        user: {},
        conversations: [],
        token : {}
    },
    mutations: Object.assign({},trollMutaion),
    actions: Object.assign({}, trollAction)
})